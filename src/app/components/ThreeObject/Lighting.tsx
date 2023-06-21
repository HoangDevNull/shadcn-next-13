import { ContactShadows, Environment, PerspectiveCamera } from '@react-three/drei';
import React from 'react';

const Lighting = () => {
  return (
    <>
      <spotLight
        penumbra={1}
        angle={1.4}
        color="#c27dc9"
        castShadow
        intensity={8}
        position={[10, 50, 10]}
        shadow-mapSize={[512, 512]}
      />
      <hemisphereLight intensity={0.2} />
      <ambientLight intensity={0.5} />
      {/* Strip */}
      <directionalLight position={[-10, -10, 2]} intensity={3} />
      {/* Ground */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.2} />
      </mesh>
      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, 0.01, 0]}
        scale={[200, 200, 200]}
        receiveShadow
        renderOrder={100000}
      >
        <planeGeometry />
        <shadowMaterial transparent color="#251005" opacity={0.25} />
      </mesh>
      <pointLight position={[10, 10, 10]} />

      {/* <Environment preset="warehouse" /> */}

      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1.6, 0]}
        opacity={0.8}
        width={15}
        height={15}
        blur={2.5}
        far={1.6}
      />
      <PerspectiveCamera makeDefault position={[-2, 0.3, 12]} fov={40} />
      <Environment preset="city" />
    </>
  );
};

export default Lighting;
