'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import GridHelper from '@/helpers/GridHelper';
import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const PostProcess = dynamic(() => import('./PostProcess'), { ssr: false });
const Stage = dynamic(() => import('./Stage'), { ssr: false });
const FloatObject = dynamic(() => import('./FloatObject'), { ssr: false });

const HeroObject: FCC = () => {
  return (
    <ThreeView className="absolute left-0 top-0 z-[1] min-h-screen w-full">
      <Suspense fallback={null}>
        <FloatObject />

        <GridHelper />
        {/* <SoftShadow /> */}
        {/* <PostProcess /> */}
        <Stage />
      </Suspense>
    </ThreeView>
  );
};

export default HeroObject;
