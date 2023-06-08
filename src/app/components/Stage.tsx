import { Environment } from '@react-three/drei';
import React from 'react';

function Stage() {
  return (
    <>
      <Environment preset="city" />
      {/* <ContactShadows frames={1} position={[0, -0.5, 0]} scale={10} opacity={0.4} far={1} blur={2} /> */}
    </>
  );
}
export default Stage;
