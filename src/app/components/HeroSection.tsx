import { PerspectiveCamera } from '@react-three/drei';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import type { FCC } from '@/types';
import { ThreeView } from '@/ui/canvas';

const PostProcess = dynamic(() => import('./PostProcess'), { ssr: false });
const Cube = dynamic(() => import('./Cube'), { ssr: false });
const AnimatedPlane = dynamic(() => import('./AnimatedPlane'), { ssr: false });
const Stage = dynamic(() => import('./Stage'), { ssr: false });

const HeroSection: FCC = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <ThreeView orbit className="relative min-h-screen w-full">
        <Suspense fallback={null}>
          <color attach="background" args={['#000']} />
          {/* <motion.group>
            <Cube scale={0.9} position={[-1, 0, 0]} color="#ca3b3b" attenuationColor={'#ff0000'} />
            <Cube scale={0.9} position={[0, 0, 0]} color="#eb8686" attenuationColor={'#ff0000'} />
            <Cube scale={0.9} position={[0, 0, -1]} color="#ae8b16" attenuationColor={'#ff0000'} />
            <Cube scale={0.9} position={[1, 0, 0]} color="#931875" attenuationColor={'#ff0000'} />
            <Cube scale={0.9} position={[0, 0, 1]} color="#851893" attenuationColor={'#ff0000'} />
          </motion.group> */}
          {/* <PostProcess /> */}

          <AnimatedPlane />
          <Stage />

          <PerspectiveCamera makeDefault fov={50} position={[-10, 10, 5]} />
        </Suspense>
      </ThreeView>

      <div className="h-12 w-full bg-red-400"></div>
    </div>
  );
};

export default HeroSection;
