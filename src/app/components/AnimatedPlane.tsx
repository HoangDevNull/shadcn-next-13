'use client';

import { extend, useLoader } from '@react-three/fiber';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import React from 'react';
import { RGBELoader, RoundedBoxGeometry } from 'three-stdlib';

import type { FCC } from '@/types';

extend({ RoundedBoxGeometry });

type Props = {} & JSX.IntrinsicElements['mesh'];

const AnimatedPlane: FCC<Props> = ({ ...props }) => {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
  );
  return (
    <>
      <MotionConfig transition={{ type: 'spring' }}>
        <motion.mesh
          animate="active"
          rotation={[0, 0, 0]}
          variants={{
            active: { rotateY: Math.PI, transition: { duration: 1.5, ease: 'linear', repeat: Infinity } },
          }}
        >
          <boxGeometry args={[20, 1, 20, 10, 10]} />
          <meshStandardMaterial color="white" />

          {/* <MeshTransmissionMaterial
            samples={4}
            resolution={1024}
            transmission={0.45}
            roughness={0}
            thickness={2.2}
            ior={2.0}
            chromaticAberration={0.25}
            anisotropy={0.51}
            distortion={0.2}
            distortionScale={0.7}
            temporalDistortion={0.5}
            clearcoat={0}
            attenuationDistance={3}
            background={texture}
            attenuationColor={'#ff0000'}
            color={'#e800b7'}
          /> */}
        </motion.mesh>

        <motion.mesh
          animate="active"
          rotation={[0, 0, 0]}
          variants={{
            active: { rotateY: -Math.PI, transition: { delay: 0.5, duration: 1.5, ease: 'linear', repeat: Infinity } },
          }}
          position={[0, 0.5, 0]}
        >
          <boxGeometry args={[15, 1, 15, 10, 10]} />
          <meshStandardMaterial color="red" />
        </motion.mesh>

        <motion.mesh
          animate="active"
          rotation={[0, 0, 0]}
          variants={{
            active: { rotateY: Math.PI, transition: { delay: 1, duration: 1.5, ease: 'linear', repeat: Infinity } },
          }}
          position={[0, 1, 0]}
        >
          <boxGeometry args={[10, 1, 10, 10, 10]} />
          <meshStandardMaterial color="green" />
        </motion.mesh>
      </MotionConfig>
    </>
  );
};

export default AnimatedPlane;
