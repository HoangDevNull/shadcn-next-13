'use client';

import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import React from 'react';

import type { FCC } from '@/types';

const PostProcess: FCC = () => {
  return (
    <EffectComposer multisampling={0} disableNormalPass={true}>
      <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} opacity={3} />
      <Noise opacity={0.025} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
};

export default PostProcess;
