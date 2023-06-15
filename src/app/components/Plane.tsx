import { MeshDistortMaterial, useCubeTexture, useTexture } from '@react-three/drei';
import React, { useState } from 'react';

const Plane = () => {
  const bumpMap = useTexture('/models/bump.jpeg');
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
    path: '/models/cube/',
  });

  const [material, set] = useState();

  return (
    <>
      <group>
        <MeshDistortMaterial
          ref={set}
          envMap={envMap}
          bumpMap={bumpMap}
          color={'#010101'}
          roughness={0.1}
          metalness={1}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          distort={0}
        />
        <mesh position={[-0.5, -1, -0.5]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="0x00ff00" />
        </mesh>
        <mesh position={[-0.5, -1, 0.5]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="0x00ff00" />
        </mesh>
        <mesh position={[0.5, -1, -0.5]}>
          <boxGeometry args={[1, 0.1, 1]} />
          <meshStandardMaterial color="0x00ff00" />
        </mesh>
      </group>
    </>
  );
};

export default Plane;
