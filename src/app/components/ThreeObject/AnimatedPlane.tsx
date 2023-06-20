'use client';

import { extend, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import type * as THREE from 'three';
import { RoundedBoxGeometry } from 'three-stdlib';

import type { FCC } from '@/types';
import { BoxWrappedModel } from '@/ui/canvas';

extend({ RoundedBoxGeometry });

type Props = {} & JSX.IntrinsicElements['mesh'];

const AnimatedPlane: FCC<Props> = ({ ...props }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    // ref.current!.rotation.x += 0.004;
    // ref.current!.rotation.y += 0.004;
  });

  return (
    <>
      <group rotation={[0.1, 0.45, 0.05]} ref={ref}>
        <BoxWrappedModel />
      </group>
    </>
  );
};

export default AnimatedPlane;
