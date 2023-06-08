'use client';

import { MeshTransmissionMaterial } from '@react-three/drei';
import { extend, useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react';
import { RGBELoader, RoundedBoxGeometry } from 'three-stdlib';

import type { FCC } from '@/types';

extend({ RoundedBoxGeometry });

type Props = {
  attenuationColor: string;
  color: string;
} & JSX.IntrinsicElements['mesh'];

const Cube: FCC<Props> = ({ attenuationColor = '#ff0000', color = '#e800b7', ...props }) => {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
  );

  const config = useControls({
    samples: { value: 4 },
    resolution: { value: 1024 },
    transmission: { value: 0.45 },
    roughness: { value: 0 },
    thickness: { value: 2.2 },
    ior: { value: 2.0 },
    chromaticAberration: { value: 0.25 },
    anisotropy: { value: 0.51 },
    distortion: { value: 0.2 },
    distortionScale: { value: -3.3 },
    temporalDistortion: { value: 0.5 },
    clearcoat: { value: 0 },
    attenuationDistance: { value: 3 },
  });

  return (
    <>
      <mesh {...props}>
        {/* @ts-ignore */}
        <roundedBoxGeometry />
        <MeshTransmissionMaterial
          {...config}
          // samples={4}
          // resolution={1024}
          // transmission={0.45}
          // roughness={0}
          // thickness={2.2}
          // ior={2.0}
          // chromaticAberration={0.25}
          // anisotropy={0.51}
          // distortion={0.2}
          // distortionScale={0.7}
          // temporalDistortion={0.5}
          // clearcoat={0}
          // attenuationDistance={3}
          background={texture}
          attenuationColor={attenuationColor}
          color={color}
        />
      </mesh>
    </>
  );
};

export default Cube;
