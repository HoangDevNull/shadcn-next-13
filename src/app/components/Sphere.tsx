'use client';

import { MeshTransmissionMaterial } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import React from 'react';

import type { FCC } from '@/types';

const Face: FCC<any> = ({ sideMaterial, reflectionMaterial, ...props }) => {
  return (
    <>
      <motion.mesh {...props} receiveShadow castShadow>
        <boxGeometry args={[2, 2, 0.075]} />
        <MeshTransmissionMaterial
          ior={2}
          thickness={1}
          anisotropy={0.1}
          chromaticAberration={0}
          distortionScale={0}
          temporalDistortion={0}
        />
      </motion.mesh>
    </>
  );
};

const MainSphere: FCC<any> = ({ ...props }) => {
  return (
    <>
      <motion.mesh {...props} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial color="red" />
      </motion.mesh>
    </>
  );
};

const Sphere: FCC<any> = () => {
  return (
    <>
      <group rotation={[0, 0, 0]} position={[0, 0, -2]}>
        {/* <MainSphere position={[1, 0, 1]} /> */}
        {/* <Face position={[1, 0, 2.4]} />
        <Face position={[1, 0, -0.4]} />

        <Face rotation={[Math.PI / 2, 0, 0]} position={[1, 1.4, 1]} />
        <Face rotation={[Math.PI / 2, 0, 0]} position={[1, -1.4, 1]} />

        <Face rotation={[0, -Math.PI / 2, 0]} position={[-0.4, 0, 1]} />
        <Face rotation={[0, -Math.PI / 2, 0]} position={[2.4, 0, 1]} /> */}

        <motion.mesh>
          <boxGeometry args={[2, 2, 2]} />
          <MeshTransmissionMaterial
            ior={2}
            thickness={1}
            anisotropy={0.1}
            chromaticAberration={0}
            distortionScale={0}
            temporalDistortion={0}
          />
        </motion.mesh>
      </group>
    </>
  );
};

export default Sphere;
