/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./public/small_cube.gltf --transform -S -i -t
*/

import { useGLTF } from '@react-three/drei';
import React from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    cube: THREE.Mesh;
  };
  materials: {
    ['default.001']: THREE.MeshStandardMaterial;
  };
};

export default function SmallCubeModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/small_cube.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cube.geometry} material={materials['default.001']} position={[0, -0.028, 0]} />
    </group>
  );
}

useGLTF.preload('/models/small_cube.glb');
