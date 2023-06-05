'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { PointGlob, ThreeView } from '@/components/canvas';

const PostProcessing = dynamic(() => import('@/helpers/PostProcessing'), { ssr: false });

export default function Page() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5">
        <ThreeView orbit className="flex h-screen w-full flex-col items-center justify-center">
          <Suspense fallback="">
            <PointGlob />
            <ambientLight intensity={0.5} />
            <pointLight position={[20, 30, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={1} />
          </Suspense>
          <PostProcessing />
        </ThreeView>
      </div>
    </>
  );
}
