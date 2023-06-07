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
          {/* <color attach="background" args={['#ffffff']} /> */}
          <ambientLight intensity={0.5} />
          <pointLight position={[20, 30, 10]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={1} />

          {/* <mesh>
            <planeBufferGeometry args={[2, 2]} />
            <PlaneShaderMaterial />
          </mesh> */}

          <FloatObject />

          <PostProcess />

          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </Suspense>
      </ThreeView>

      <div className="h-12 w-full bg-red-400"></div>
    </div>
  );
};

export default HeroSection;
