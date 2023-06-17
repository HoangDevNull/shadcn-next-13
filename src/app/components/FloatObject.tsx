import { Icosahedron, MeshDistortMaterial, useCubeTexture, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';

function Instances() {
  const bumpMap = useTexture('/models/bump.jpeg');
  const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], {
    path: '/models/cube/',
  });
  // we use this array ref to store the spheres after creating them
  const [sphereRefs] = useState<any[]>([]);
  const [material, set] = useState(() => []);
  // we use this array to initialize the background spheres
  const initialPositions = [
    [-10, 12, -4],
    [10, -10, -23],
    [-16, -6, -20],
    [12, -2, -3],
    [13, 4, -12],
    [14, -2, -23],
    [8, 10, -20],
  ];
  // smaller spheres movement
  useFrame(() => {
    // animate each sphere in the array
    sphereRefs.forEach((el) => {
      el.position.y += 0.02;
      if (el.position.y > 19) {
        el.position.y = -18;
      }
      // el.rotation.x += 0.06;
      el.rotation.y += 0.06;
      // el.rotation.z += 0.02;
    });
  });

  return (
    <>
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
        distort={0.4}
      />
      {initialPositions.map((pos, i) => (
        <Icosahedron
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
