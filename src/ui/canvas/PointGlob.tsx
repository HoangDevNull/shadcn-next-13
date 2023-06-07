/* eslint-disable no-param-reassign */
import { ComputedAttribute, useGLTF } from '@react-three/drei';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import type { GLTF } from 'three-stdlib';
import { MeshSurfaceSampler } from 'three-stdlib';

import { PointShaderMaterial } from '@/helpers/material';
import type { FCC } from '@/types';

type GLTFResult = GLTF & {
  nodes: {
    Skull: THREE.Mesh;
  };
  materials: {
    Default: THREE.MeshStandardMaterial;
  };
};

const PointGlob: FCC = ({ children }) => {
  const modelRef = useRef<any>();
  const meshRef = useRef<any>(null);
  const nPoints = useMemo(() => 99000, []);

  const { scene } = useGLTF('/skull-transformed.glb') as GLTFResult;

  return (
    <>
      <points>
        <bufferGeometry>
          <ComputedAttribute
            name="position"
            compute={() => {
              const sampler = new MeshSurfaceSampler(scene.children[0] as THREE.Mesh).build();
              const vertices = [];
              const tempPosition = new THREE.Vector3();

              for (let i = 0; i < nPoints; i++) {
                // Sample a random position in the model
                sampler.sample(tempPosition);
                // Push the coordinates of the sampled coordinates into the array
                vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
              }

              return new THREE.Float32BufferAttribute(vertices, 3);
            }}
          />
        </bufferGeometry>
        <PointShaderMaterial />
      </points>
    </>
  );
};

export default PointGlob;
