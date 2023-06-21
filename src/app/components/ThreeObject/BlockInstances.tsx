/* eslint-disable @typescript-eslint/no-shadow */
import { Instance, Instances, MeshTransmissionMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { RoundedBoxGeometry } from 'three-stdlib';

extend({ RoundedBoxGeometry });

const BASE_SIZE = 0.6;

const boxes = [
  { color: '#A00BA6', pos: [-BASE_SIZE - 0.03, 0, 0] },
  { color: '#A00BA6', pos: [0, 0, 0] },
  { color: '#A00BA6', pos: [0, 0, -BASE_SIZE - 0.03] },
  { color: '#A00BA6', pos: [-BASE_SIZE - 0.03, 0, -BASE_SIZE - 0.03] },

  { color: '#A00BA6', pos: [-BASE_SIZE - 0.03, BASE_SIZE + 0.03, 0] },
  { color: '#A00BA6', pos: [0, BASE_SIZE + 0.03, 0] },
  { color: '#A00BA6', pos: [0, BASE_SIZE + 0.03, -BASE_SIZE - 0.03] },
  { color: '#A00BA6', pos: [-BASE_SIZE - 0.03, BASE_SIZE + 0.03, -BASE_SIZE - 0.03] },
] as {
  color: string;
  pos: [x: number, y: number, z: number];
}[];

function BlockInstances() {
  const mainCube = useRef<THREE.Group>(null);
  // const { x, y, z } = useControls({
  //   x: -0.5,
  //   y: 0,
  //   z: -0.5,
  // });

  useFrame(() => {
    // mainCube.current!.rotation.y -= 0.004;
    // mainCube.current!.rotation.x -= 0.004;
    // mainCube.current!.rotation.z -= 0.004;
  });

  return (
    <group castShadow position={[1.25, 0.55, 4.25]} rotation={[0.1, 0.45, 0.04]}>
      <group ref={mainCube} rotation={[-0.5, 0, -0.5]} position={[-0.3, 0.5, 0]}>
        <Instances
          castShadow
          limit={100} // Optional: max amount of items (for calculating buffer size)
          range={100} // Optional: draw-range
        >
          {/* @ts-ignore */}
          <roundedBoxGeometry args={[BASE_SIZE, BASE_SIZE, BASE_SIZE, 7, 0.03]} />
          <MeshTransmissionMaterial
            resolution={128}
            samples={4}
            roughness={0.5}
            thickness={1}
            envMapIntensity={1}
            transmission={1}
            metalness={1}
            distortionScale={0}
            temporalDistortion={0}
          />
          {boxes.map((x, i) => (
            <Instance color={x.color} position={x.pos} key={i} />
          ))}
        </Instances>
      </group>

      {/* <group position={[0, 0.5, 0]} scale={0.8} ref={mainCube}></group> */}

      {/* <mesh castShadow ref={mainSphere} position={[0, 0.5, 0]} rotation={[-0.5, 0, -0.5]}>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <MeshTransmissionMaterial
          backside={false}
          samples={1}
          resolution={768}
          transmission={0.95}
          roughness={0}
          clearcoat={0.1}
          clearcoatRoughness={0.1}
          thickness={0.4}
          ior={2.5}
          chromaticAberration={0}
          attenuationDistance={0.5}
          attenuationColor={'#ffffff'}
          color={'#ff00dd'}
          background={texture}
          distortionScale={0}
          temporalDistortion={0}
        />
      </mesh> */}
    </group>
  );
}

export default BlockInstances;
