import { PerspectiveCamera } from '@react-three/drei';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

import FloatObject from './FloatObject';

const PostProcess = dynamic(() => import('./PostProcess'), { ssr: false });

const HeroSection: FCC = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ThreeView orbit className="relative min-h-screen w-full">
        <Suspense fallback={null}>
          <group>
            <FloatObject />
          </group>

          <PostProcess />

          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </Suspense>
      </ThreeView>

      <div className="h-12 w-full bg-red-400"></div>
    </div>
  );
};

export default HeroSection;
