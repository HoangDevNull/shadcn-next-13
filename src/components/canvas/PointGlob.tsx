/* eslint-disable no-param-reassign */
// @ts-nocheck

import { ComputedAttribute } from '@react-three/drei';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three-stdlib';

import type { FCC } from '@/types';

import { Skull } from './Skull';

const PointGlob: FCC = ({ children }) => {
  const modelRef = useRef<any>();
  const meshRef = useRef<any>(null);
  const nPoints = useMemo(() => 1000, []);
  return (
    <>
      <Skull position={[0, -1.5, 0]} ref={modelRef} />
      <points>
        <bufferGeometry>
          <ComputedAttribute
            name="position"
            compute={() => {
              const sampler = new MeshSurfaceSampler(modelRef.current.children[0]).build();
              const vertices = [];
              const tempPosition = new THREE.Vector3();

              for (let i = 0; i < 100; i++) {
                // Sample a random position in the model
                sampler.sample(tempPosition);
                // Push the coordinates of the sampled coordinates into the array
                vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
              }

              return new THREE.Float32BufferAttribute(vertices, 3);
            }}
          />
        </bufferGeometry>
        <pointsMaterial
          color={'0x5c0b17'}
          size={0.1}
          blending={THREE.AdditiveBlending}
          transparent={true}
          opacity={0.8}
          depthWrite={false}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
};

export default PointGlob;
