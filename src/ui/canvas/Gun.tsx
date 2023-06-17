/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ./gun.gltf --transform -S -i -t
*/

import { useGLTF } from '@react-three/drei';
import React from 'react';
import type * as THREE from 'three';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.Mesh;
  };
  materials: {
    None: THREE.MeshStandardMaterial;
  };
};

function Gun(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/gun.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_10.geometry} material={materials.None} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/models/gun.glb');

export default Gun;
