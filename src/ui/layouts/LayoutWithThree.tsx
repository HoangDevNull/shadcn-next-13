'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';

import type { FCC } from '@/types';

const Scene = dynamic(() => import('@/ui/canvas/Scene'), { ssr: false });

const LayoutWithThree: FCC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref as any}
        eventPrefix="client"
      />
    </div>
  );
};

export default LayoutWithThree;
