import { CuboidCollider, RigidBody } from "@react-three/rapier";

const Ground = () => {
  return (
    <RigidBody type="fixed">
      <CuboidCollider args={[100, 0.5, 100]} />
      <mesh receiveShadow>
        <boxGeometry args={[200, 1, 200]} />
        <meshPhongMaterial color="white" opacity={0.2} transparent />
      </mesh>
    </RigidBody>
  );
};

export default Ground;
