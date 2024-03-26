import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { generatePositions } from "./box-positions";

const NUM_OF_BOXES = 10;
export const BOX_SIZE = 5;

const Boxes = () => {
  const positions = useMemo(() => generatePositions(NUM_OF_BOXES), []);

  return (
    <>
      {positions.map((p, i) => (
        <CardboardBox key={i} position={p.position} angle={p.angle} />
      ))}
    </>
  );
};

export default Boxes;

type CardboardBoxProps = {
  position: [number, number, number];
  angle?: number;
};

const CardboardBox = ({ position, angle = 0 }: CardboardBoxProps) => {
  const textures = useTexture([
    "/box-textures/box-side2.png",
    "/box-textures/box-side2.png",
    "/box-textures/box-top.png",
    "/box-textures/box-bottom.png",
    "/box-textures/box-side1.png",
    "/box-textures/box-side1.png",
  ]);

  const rotation: [number, number, number] = [0, -(angle / 180) * Math.PI, 0];

  return (
    <RigidBody position={position} rotation={rotation} angularDamping={0}>
      <CuboidCollider
        args={[BOX_SIZE / 2, BOX_SIZE / 2, BOX_SIZE / 2]}
        density={2}
        friction={0.1}
      />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[BOX_SIZE, BOX_SIZE, BOX_SIZE]} />
        {textures.map((texture, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            map={texture}
          />
        ))}
      </mesh>
    </RigidBody>
  );
};
