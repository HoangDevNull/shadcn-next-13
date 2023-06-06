/* eslint-disable @typescript-eslint/no-shadow */
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import { EffectComposer, RenderPass, ShaderPass } from 'three-stdlib';

import { LensDistortionShader } from '@/helpers/Lendistortion';

const useLensDistortion = () => {
  const [{ dpr }, scene, camera, size, gl] = useThree((s) => [s.viewport, s.scene, s.camera, s.size, s.gl] as any[]);

  const [composer, renderTarget] = useMemo(() => {
    const renderPass = new RenderPass(scene, camera);
    const renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, {
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
  }, [camera, gl, scene, size]);

  useFrame(({ mouse }) => {
    gl.render(scene, camera);
    gl.setRenderTarget(renderTarget);
    composer.render();
  });
};

export default useLensDistortion;
