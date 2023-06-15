'use client';

import { OrbitControls, View as ViewImpl } from '@react-three/drei';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import { Three } from '@/helpers/Three';

const ThreeView = forwardRef<any, { orbit?: boolean; className?: string; children?: any }>(
  ({ children, orbit, ...props }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        <div ref={localRef} {...props} />
        <Three>
          <ViewImpl track={localRef as any}>
            {children}
            {orbit && <OrbitControls makeDefault />}
          </ViewImpl>
        </Three>
      </>
    );
  }
);
ThreeView.displayName = 'ThreeView';

export default ThreeView;
