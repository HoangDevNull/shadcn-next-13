import { PerspectiveCamera } from '@react-three/drei';
import React from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

import FloatObject from './FloatObject';

const HeroSection: FCC = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ThreeView orbit className="min-h-screen w-full">
        {/* <color attach="background" args={['#ffffff']} /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 30, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        <FloatObject />

        <PerspectiveCamera makeDefault fov={50} position={[0, 0, 6]} />
      </ThreeView>

      <ThreeView orbit className="min-h-screen w-full">
        {/* <color attach="background" args={['#ffffff']} /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 30, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        <mesh>
          <ringGeometry />
          <meshStandardMaterial />
        </mesh>

        <PerspectiveCamera makeDefault fov={50} position={[0, 0, 6]} />
      </ThreeView>
    </div>
  );
};

export default HeroSection;
