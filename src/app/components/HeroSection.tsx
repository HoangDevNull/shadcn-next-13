import { PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';

import PlaneShader from '@/helpers/PlaneShader';
import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

import FloatObject from './FloatObject';

const HeroSection: FCC = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ThreeView orbit className="relative min-h-screen w-full">
        <Suspense fallback={null}>
          {/* <color attach="background" args={['#ffffff']} /> */}
          <ambientLight intensity={0.5} />
          <pointLight position={[20, 30, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />

          <FloatObject />

          {/* R3f bug track mouse pos */}
          <mesh onPointerOver={() => {}} onPointerOut={() => {}}>
            <planeBufferGeometry args={[2, 2]} />
            <PlaneShader />
          </mesh>

          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
        </Suspense>
      </ThreeView>
    </div>
  );
};

export default HeroSection;
