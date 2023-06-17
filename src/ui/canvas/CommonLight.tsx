import { PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import type { ColorRepresentation } from 'three';

import type { FCC } from '@/types';

const CommonLight: FCC<{ color?: ColorRepresentation }> = ({ color }) => (
  <Suspense fallback={null}>
    {/* Fill */}
    <ambientLight intensity={0.5} />
    {/* Main */}
    <directionalLight
      position={[1, 10, -2]}
      intensity={1}
      shadow-camera-far={70}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      shadow-mapSize={[512, 512]}
      castShadow
    />
    {/* <pointLight position={[-10, -10, -10]} color="red" /> */}
    <PerspectiveCamera makeDefault fov={50} position={[1, 0, 7]} />
  </Suspense>
);

export default CommonLight;
