import { Instance, Instances, MeshTransmissionMaterial } from '@react-three/drei';
import { useLoader, useThree } from '@react-three/fiber';
import { RGBELoader } from 'three-stdlib';

function BlockInstances() {
  const { viewport, clock } = useThree();
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/royal_esplanade_1k.hdr');

  // Render-loop
  // useFrame((state, delta) => {
  //   // Update instanced diamonds
  //   diamonds.forEach((data, i) => {
  //     const t = clock.getElapsedTime();
  //     data.position[1] -= data.factor * 1 * delta * data.direction;
  //     if (data.direction === 1 ? data.position[1] < -20 : data.position[1] > 20)
  //       data.position = [viewport.width / 2 - Math.random() * viewport.width, 50 * data.direction, data.position[2]];
  //     const { position, rotation, factor } = data;
  //     dummy.position.set(position[0], position[1], position[2]);
  //     dummy.rotation.set(
  //       rotation[0] + (t * factor) / 10,
  //       rotation[1] + (t * factor) / 10,
  //       rotation[2] + (t * factor) / 10
  //     );
  //     dummy.scale.setScalar(1 + factor);
  //     dummy.updateMatrix();
  //     model.current.setMatrixAt(i, dummy.matrix);
  //   });
  //   model.current.instanceMatrix.needsUpdate = true;
  // });

  return (
    <group position={[0.75, 1, 4.2]} rotation={[0.1, 0.45, 0.05]}>
      <Instances
        limit={10} // Optional: max amount of items (for calculating buffer size)
        range={10} // Optional: draw-range
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <MeshTransmissionMaterial
          backside={false}
          samples={6}
          resolution={256}
          transmission={0.95}
          roughness={0.4}
          clearcoat={0.1}
          clearcoatRoughness={0.1}
          thickness={50}
          backsideThickness={0}
          ior={1.5}
          chromaticAberration={0}
          anisotropy={1}
          distortion={0}
          distortionScale={0.2}
          temporalDistortion={0}
          attenuationDistance={0.5}
          attenuationColor={'#ff0000'}
          color={'#e800b7'}
          background={texture}
        />
        {/* <Instance color="red" position={[0, 1, 0]} rotation={[Math.PI / 3, 0, 0]} />
        <Instance color="red" position={[0, 0, 1]} rotation={[Math.PI / 3, 0, 0]} />
        <Instance color="red" position={[1, 0, 0]} rotation={[Math.PI / 3, 0, 0]} /> */}
        <Instance position={[0, 0, 0]} />
      </Instances>
    </group>
  );
}

export default BlockInstances;
