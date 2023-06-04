'use client';

import { Preload } from '@react-three/drei';
import type { CanvasProps } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import type { FC, RefAttributes } from 'react';

import { r3f } from '@/helpers/r3f';

interface Props extends Omit<CanvasProps, 'children'>, RefAttributes<HTMLCanvasElement> {}

const Scene: FC<Props> = (props) => {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
};

export default Scene;
