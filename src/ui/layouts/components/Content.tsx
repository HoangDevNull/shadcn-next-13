'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import React from 'react';

import type { FCC } from '@/types';

interface Props {
  withThree?: boolean;
}

const Content: FCC<Props> = ({ children }) => {
  return (
    <>
      <ReactLenis root options={{ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)) }}>
        <main className="min-h-screen pt-header">{children}</main>
      </ReactLenis>
    </>
  );
};

export default Content;
