import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

const Lights = () => {
  const lightRef = useRef<DirectionalLight>(null!);
  useHelper(lightRef, DirectionalLightHelper, 5);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        castShadow
        color={0xffdaa8}
        position={[0, 100, -10]}
        shadow-mapSize={[2048, 2048]}
        intensity={1}
        ref={lightRef}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-40, 40, 40, -40]}
          position={[0, 100, -20]}
          rotation={[-Math.PI * (3 / 4), 0, 0]}
        />
      </directionalLight>
    </>
  );
};

export default Lights;
