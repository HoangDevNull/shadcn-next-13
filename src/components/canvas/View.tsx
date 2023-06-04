'use client';

import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei';
import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react';
import type { ColorRepresentation } from 'three';

import { Three } from '@/helpers/Three';
import type { FCC } from '@/types';

export const Common: FCC<{ color?: ColorRepresentation }> = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

const View = forwardRef<any, any>(({ children, orbit, ...props }, ref) => {
  const localRef = useRef<HTMLElement>(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef as any}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export { View };
