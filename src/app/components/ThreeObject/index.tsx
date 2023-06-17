'use client';

import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const PostProcess = dynamic(() => import('./PostProcess'), { ssr: false });
const FloatObject = dynamic(() => import('./FloatObject'), { ssr: false });
const Background = dynamic(() => import('./Background'), { ssr: false });
const LightSource = dynamic(() => import('./LightSource'), { ssr: false });

const ThreeObject: FCC = () => {
  return (
    <ThreeView className="pointer-events-auto absolute left-0 top-0 min-h-screen w-full">
      <Suspense fallback={null}>
        <LightSource />
        <Background />
        {/* <FloatObject /> */}
        <PostProcess />
        {/* <Stage /> */}
      </Suspense>
    </ThreeView>
  );
};

export default ThreeObject;
