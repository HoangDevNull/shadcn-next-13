'use client';

import { PerspectiveCamera } from '@react-three/drei';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const AnimatedPlane = dynamic(() => import('./AnimatedPlane'), { ssr: false });

const ThreeObject: FCC = () => {
  return (
    <>
      <ThreeView className="pointer-events-auto absolute right-0 top-0 min-h-screen w-full">
        <Suspense fallback={null}>
          <AnimatedPlane />

          <PerspectiveCamera makeDefault fov={40} position={[-4, 0, 12]} />
        </Suspense>
      </ThreeView>
    </>
  );
};

export default ThreeObject;
