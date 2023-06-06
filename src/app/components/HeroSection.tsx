import { PerspectiveCamera } from '@react-three/drei';
import React from 'react';

import PlaneShader from '@/helpers/PlaneShader';
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

        <mesh>
          <planeBufferGeometry args={[2, 2]} />
          <PlaneShader />
        </mesh>

        <PerspectiveCamera fov={50} position={[34, 16, -20]} args={[window.innerWidth / window.innerHeight, 1, 100]} />
      </ThreeView>
    </div>
  );
};

export default HeroSection;
