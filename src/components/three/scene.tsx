import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Lights from "./lights";
import { Physics } from "@react-three/rapier";
import Pointer from "./pointer";
import { PerspectiveCamera, Stats } from "@react-three/drei";
import Ground from "./ground";
import Boxes from "./boxes";
import useIsMobile from "../hooks/useIsMobile";

export const MOBILE_CAMERA_OFFSET = -6;

const Scene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  return (
    <Canvas
      shadows={"basic"}
      gl={{ alpha: true, stencil: false }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
      ref={canvasRef}
    >
      <PerspectiveCamera
        makeDefault={!isMobile}
        position={[0, 600, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fov={2}
      />
      <PerspectiveCamera
        makeDefault={isMobile}
        position={[MOBILE_CAMERA_OFFSET, 600, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fov={2}
      />
      <Lights />
      <Suspense>
        <Physics debug gravity={[0, -30, 0]}>
          <Ground />
          <Boxes />
          <Pointer canvasRef={canvasRef} />
        </Physics>
      </Suspense>
      <Stats />
    </Canvas>
  );
};

export default Scene;
