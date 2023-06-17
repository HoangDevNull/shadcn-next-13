import { Bloom, EffectComposer, HueSaturation, Vignette } from '@react-three/postprocessing';
import React from 'react';

import CustomEffect from './CustomEffect';

export default function PostProcess() {
  return (
    <EffectComposer disableNormalPass multisampling={0}>
      <Bloom mipmapBlur intensity={1.8} luminanceThreshold={0.9} />
      <Vignette offset={0.1} darkness={0.85} eskil={false} />
      <HueSaturation
        hue={0.1} // hue in radians
        saturation={0.15} // saturation in radians
      />
      <CustomEffect frequency={10} amplitude={0.1} />
    </EffectComposer>
  );
}
