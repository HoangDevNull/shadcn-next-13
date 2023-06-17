/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-multi-assign */
import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Background() {
  const height = useTexture('./models/displacement.jpg');
  const normal = useTexture('./models/NormalMap2.png');

  normal.anisotropy = 16;

  normal.wrapS = normal.wrapT = THREE.RepeatWrapping;
  normal.repeat = new THREE.Vector2(3, 30);

  height.wrapS = height.wrapT = THREE.RepeatWrapping;
  height.repeat = new THREE.Vector2(1, 2);

  height.anisotropy = 16;
  const [viewport, camera, gl] = useThree((s) => [s.viewport, s.camera, s.gl] as const);
  const composer = useRef<any>();
  return (
    <group>
      <mesh scale={[viewport.width / 2, viewport.height / 0.95, 1]} rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[2, 1, 2, 2]} />
        <meshPhysicalMaterial
          color="#050505"
          metalness={0.9}
          roughness={0.3}
          displacementMap={height}
          displacementScale={0.1}
          normalMap={normal}
          normalScale={new THREE.Vector2(0.25, 0.25)}
        />
      </mesh>
    </group>
  );
}
