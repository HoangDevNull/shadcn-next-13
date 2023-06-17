'use client';

import { PerspectiveCamera } from '@react-three/drei';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const PostProcess = dynamic(() => import('./PostProcess'), { ssr: false });
const Stage = dynamic(() => import('./Stage'), { ssr: false });
const FloatObject = dynamic(() => import('./FloatObject'), { ssr: false });

const HeroObject: FCC = () => {
  return (
    <ThreeView orbit className="absolute left-0 top-0 z-[1] min-h-screen w-full">
      <Suspense fallback={null}>
        {/* <GridHelper /> */}
        {/* <SoftShadow /> */}
        <PerspectiveCamera makeDefault fov={50} position={[1, 0, 7]} />

        <FloatObject />
        <PostProcess />
        <Stage />
      </Suspense>
    </ThreeView>
  );
};

export default HeroObject;
