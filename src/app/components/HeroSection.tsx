import { PerspectiveCamera } from '@react-three/drei';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import GridHelper from '@/helpers/GridHelper';
import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const PostProcess = dynamic(() => import('./PostProcess'), { ssr: false });
const Stage = dynamic(() => import('./Stage'), { ssr: false });

const HeroSection: FCC = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ThreeView orbit className="relative min-h-screen w-full">
        <Suspense fallback={null}>
          <color attach="background" args={['#050505']} />

          <PerspectiveCamera makeDefault fov={50} position={[-10, 10, 5]} />
          <GridHelper />
          {/* <SoftShadow /> */}
          <Stage />
        </Suspense>
      </ThreeView>

      <div className="h-12 w-full bg-red-400"></div>
    </div>
  );
};

export default HeroSection;
