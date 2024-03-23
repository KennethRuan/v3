"use client";

import React, { Suspense, useMemo, useRef } from "react";
import { DirectionalLight, DirectionalLightHelper, Vector3 } from "three";
import { Stats, useTexture, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { Position } from "./types";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen bg-white">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-black">Testafsdjkfdaslkfdsjak</div>
      </div>

      <div className="relative z-[1] w-full h-full">
        <Canvas
          camera={{ position: [0, 120, 0], fov: 15 }}
          shadows={"basic"}
          gl={{ alpha: true, stencil: false }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        >
          <Lights />
          <Suspense>
            <Physics debug gravity={[0, -20, 0]}>
              <Ground />
              <Boxes />
              <Pointer />
            </Physics>
          </Suspense>
          <Stats />
        </Canvas>
      </div>
    </div>
  );
}

const Lights = () => {
  const lightRef = useRef<DirectionalLight>(null!);
  useHelper(lightRef, DirectionalLightHelper, 5);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        castShadow
        color={0xffdaa8}
        position={[0, 100, -20]}
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

const Boxes = () => {
  const NUM_OF_BOXES = 10;

  const generatePositions = (n: number): Position[] => {
    const positions: Position[] = [
      [-20, 10, 10],
      // [1, 0.5, -3],
    ];
    // for (let i = 0; i < n; i++) {
    //   const x = Math.random() * 30 - 5;
    //   const y = Math.random() * 50;
    //   const z = Math.random() * 30 - 5;
    //   positions.push([x, y, z]);
    // }
    return positions;
  };

  const positions = useMemo(() => generatePositions(NUM_OF_BOXES), []);

  return (
    <>
      {positions.map((p, i) => (
        <CardboardBox key={i} position={p} />
      ))}
    </>
  );
};

type CardboardBoxProps = {
  position: [number, number, number];
};

const CardboardBox = ({ position }: CardboardBoxProps) => {
  const textures = useTexture([
    "/box-textures/box-side2.png",
    "/box-textures/box-side2.png",
    "/box-textures/box-top.png",
    "/box-textures/box-bottom.png",
    "/box-textures/box-side1.png",
    "/box-textures/box-side1.png",
  ]);

  return (
    <RigidBody position={position}>
      <CuboidCollider args={[0.5, 0.5, 0.5]} />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5, 5, 5]} />
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

const Pointer = ({ vec = new Vector3() }) => {
  const ref = useRef<RapierRigidBody>(null);
  useFrame(({ pointer, viewport }) => {
    vec.lerp(
      {
        x: (pointer.x * viewport.width) / 2,
        y: 0.5,
        z: (-pointer.y * viewport.height) / 2,
      },
      0.1
    );
    ref.current?.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody position={[100, 100, 100]} ref={ref} type="kinematicPosition">
      <BallCollider args={[0.5]} />
      <mesh>
        <sphereGeometry args={[0.5]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </RigidBody>
  );
};
