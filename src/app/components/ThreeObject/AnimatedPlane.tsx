'use client';

import { MeshDistortMaterial, useCubeTexture, useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import React from 'react';
import { RoundedBoxGeometry } from 'three-stdlib';

import type { FCC } from '@/types';

extend({ RoundedBoxGeometry });

type Props = {} & JSX.IntrinsicElements['mesh'];

const AnimatedPlane: FCC<Props> = ({ ...props }) => {
  const bumpMap = useTexture('/models/matcap1.jpg');
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
    path: '/models/cube/',
  });
  return (
    <>
      <group>
        <mesh castShadow receiveShadow rotation={[1.5, 1, 1]}>
          <torusGeometry args={[2, 0.3, 16, 100, 7]} />
          <MeshDistortMaterial
            envMap={envMap}
            bumpMap={bumpMap}
            color={'#6a0a80'}
            roughness={0.1}
            metalness={1}
            bumpScale={0.005}
            clearcoat={1}
            clearcoatRoughness={1}
            radius={1}
            distort={0}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <torusGeometry args={[2, 0.3, 16, 100, 7]} />
          <MeshDistortMaterial
            envMap={envMap}
            bumpMap={bumpMap}
            color={'#6a0a80'}
            roughness={0.1}
            metalness={1}
            bumpScale={0.005}
            clearcoat={1}
            clearcoatRoughness={1}
            radius={1}
            distort={0}
          />
        </mesh>
      </group>
    </>
  );
};

export default AnimatedPlane;
