import { MeshDistortMaterial, Octahedron, useCubeTexture, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';

function Instances() {
  const bumpMap = useTexture('/models/bump.jpeg');
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
    path: '/models/cube/',
  });
  const [sphereRefs] = useState<any[]>([]);
  const [material, set] = useState(() => []);
  const initialPositions = [
    [-10, 12, -4],
    [10, -10, -23],
    [-16, -6, -20],
    [12, -2, -3],
    [13, 4, -12],
    [14, -2, -23],
    [8, 10, -20],
  ];
  useFrame(() => {
    sphereRefs.forEach((el) => {
      el.position.y += 0.02;
      if (el.position.y > 19) {
        el.position.y = -18;
      }
      // el.rotation.x += 0.06;
      el.rotation.y += 0.04;
      // el.rotation.z += 0.02;
    });
  });

  return (
    <>
      <MeshDistortMaterial
        ref={set}
        envMap={envMap}
        bumpMap={bumpMap}
        color={'#31023b'}
        roughness={0.1}
        metalness={1}
        bumpScale={0.005}
        clearcoat={1}
        clearcoatRoughness={1}
        radius={1}
        distort={0.4}
      />
      {initialPositions.map((pos, i) => (
        <Octahedron
          position={[pos[0], pos[1], pos[2]]}
          material={material}
          key={i}
          ref={(ref) => (sphereRefs[i] = ref)}
        />
      ))}
    </>
  );
}

export default function FloatObject() {
  return (
    <>
      <group>
        <Instances />
      </group>
    </>
  );
}
