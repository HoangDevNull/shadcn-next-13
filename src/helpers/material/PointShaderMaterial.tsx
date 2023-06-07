/* eslint-disable no-param-reassign */
// @ts-nocheck
import { useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import * as THREE from 'three';

class CustomPointsMaterial extends THREE.PointsMaterial {
  constructor(parameters) {
    super();
    this.setValues(parameters);
    this._mousePos = { value: new THREE.Vector3() };
  }

  onBeforeCompile(shader, gl) {
    shader.uniforms.mousePos = this.mousePos;

    shader.vertexShader = `
                uniform vec3 mousePos;
                varying float vNormal;
                
                ${shader.vertexShader}`.replace(
      `#include <begin_vertex>`,
      `#include <begin_vertex>   
                  vec3 seg = position - mousePos;
                  vec3 dir = normalize(seg);
                  float dist = length(seg);
                  if (dist < 1.5){
                    float force = clamp(1.0 / (dist * dist), -0., .5);
                    transformed += dir * force;
                    vNormal = force /0.5;
                  }
                `
    );
  }

  get mousePos() {
    return this._mousePos;
  }

  set mousePos(v) {
    this._mousePos.value = v;
  }
}

extend({ CustomPointsMaterial });

// eslint-disable-next-line react/display-name
const PointShaderMaterial = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef();
  const texture = useTexture('/particle-texture.jpg');

  useImperativeHandle(ref, () => localRef.current);
  useFrame(({ mouse }) => {
    localRef.current.uniforms.mousePos.value = new THREE.Vector3(mouse.x, mouse.y, 0);
  });
  return (
    <customPointsMaterial
      ref={localRef}
      color={0x5c0b17}
      size={0.1}
      blending={THREE.AdditiveBlending}
      transparent={true}
      opacity={0.8}
      depthWrite={false}
      sizeAttenuation={true}
      alphaMap={texture}
      uniforms={{
        mousePos: { value: new THREE.Vector3() },
      }}
      {...props}
    />
  );
});

export default PointShaderMaterial;
