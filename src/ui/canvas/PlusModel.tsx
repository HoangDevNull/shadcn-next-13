/* eslint-disable react/display-name */
/* eslint-disable no-param-reassign */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/plus.gltf --transform --t
*/

import { useGLTF, useTexture } from '@react-three/drei';
import React, { forwardRef } from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

import { objectShaders } from '@/helpers/shader/objectShaders';

type GLTFResult = GLTF & {
  nodes: { Box001: THREE.Mesh };
  materials: {};
};

const PlusModel = forwardRef<any, any>(({ material, ...props }, ref) => {
  const { nodes } = useGLTF('/models/plus.glb') as GLTFResult;
  const texture = useTexture('/models/matcap1.jpg');

  return (
    <mesh ref={ref}>
      <mesh geometry={nodes.Box001.geometry} scale={0.025}>
        <shaderMaterial
          uniforms={{ tMatcap: { value: texture }, tMatcap2: { value: null }, uProgress: { value: 0 } }}
          vertexShader={objectShaders.vertex}
          fragmentShader={objectShaders.fragment}
        />
      </mesh>
    </mesh>
  );
});

export default PlusModel;

useGLTF.preload('/models/plus.glb');
