'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const AnimatedPlane = dynamic(() => import('./AnimatedPlane'), { ssr: false });
const BlockInstances = dynamic(() => import('./BlockInstances'), { ssr: false });
const Lighting = dynamic(() => import('./Lighting'), { ssr: false });

const ThreeObject: FCC = () => {
  return (
    <>
      <ThreeView className="pointer-events-auto absolute left-0 top-0 min-h-screen w-full">
        <Suspense fallback={null}>
          <Lighting />
          <BlockInstances />
          <AnimatedPlane />
        </Suspense>
      </ThreeView>
    </>
  );
};

export default ThreeObject;
