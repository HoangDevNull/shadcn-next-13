/* eslint-disable @typescript-eslint/no-shadow */
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib';

import { LensDistortionShader } from '@/helpers/Lendistortion';

// Basic shader postprocess based on the template https://gist.github.com/RenaudRohlinger/bd5d15316a04d04380e93f10401c40e7
// USAGE: Simply call usePostprocess hook in your r3f component to apply the shader to the canvas as a postprocess effect
const useLensDistortion = () => {
  const [{ dpr }, scene, camera, size, gl] = useThree((s) => [s.viewport, s.scene, s.camera, s.size, s.gl] as any[]);

  const [composer, renderTarget] = useMemo(() => {
    const renderPass = new RenderPass(scene, camera);
    const renderTarget = new THREE.WebGLRenderTarget(512, 512, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    const composer = new EffectComposer(gl, renderTarget);
    composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const distortPass = new ShaderPass(LensDistortionShader);
    distortPass.material.defines.CHROMA_SAMPLES = 4;
    distortPass.enabled = true;
    distortPass.material.uniforms.baseIor.value = 0.91;
    distortPass.material.uniforms.bandOffset.value = 0.0019;
    distortPass.material.uniforms.jitterIntensity.value = 20.7;
    distortPass.material.defines.BAND_MODE = 2;

    composer.addPass(renderPass);
    composer.addPass(distortPass);

    return [composer, renderTarget];
  }, [camera, gl, scene]);

  useFrame(() => {
    gl.render(scene, camera);
    gl.setRenderTarget(renderTarget);
    composer.render();
  });
  return null;
};

export default useLensDistortion;
