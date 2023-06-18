import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import React from 'react';

import type { FCC } from '@/types';

interface Props {
  color?: string;
}

const SoftShadow: FCC<Props> = ({ color = '#383838' }) => {
  return (
    <AccumulativeShadows
      frames={100}
      color={color}
      colorBlend={5}
      toneMapped={true}
      alphaTest={0.9}
      opacity={1}
      scale={30}
      position={[0, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={10}
        ambient={0.5}
        intensity={1}
        position={[0, 10, -10]}
        size={15}
        mapSize={1024}
        bias={0.0001}
      />
    </AccumulativeShadows>
  );
};

export default SoftShadow;
