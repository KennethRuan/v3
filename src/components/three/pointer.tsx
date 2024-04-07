import { BallCollider, RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useIsMobile from "../hooks/useIsMobile";
import { useFrame } from "@react-three/fiber";
import { MOBILE_CAMERA_OFFSET } from "./scene";
import { useFullscreenContext } from "../providers/fullscreen-provider";

const Pointer = ({ vec = new Vector3(), canvasRef }: any) => {
  const ref = useRef<RapierRigidBody>(null);
  const isMobile = useIsMobile();
  const { isFullscreen } = useFullscreenContext();

  // Adding state to track touch position
  const touchPosition = useRef({ x: 0, y: 0 });
  const depth = useRef(-5);
  const fullscreen = useRef(isFullscreen);

  useEffect(() => {
    fullscreen.current = isFullscreen;
  }, [isFullscreen]);

  // Update touch position on touch move
  useEffect(() => {
    const handleTouchMove = (e: any) => {
      if (!fullscreen.current) return;

      e.preventDefault();
      const touch = e.touches[0];
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Account for canvas offset
      const x = (touch.clientX / window.outerWidth) * 2 - 1;
      const y = -(touch.clientY / window.innerHeight) * 2 + 1;
      touchPosition.current = { x, y };
    };

    const handleTouchStart = (e: any) => {
      if (!fullscreen.current) return;
      if (e.target !== canvasRef.current) return;
      depth.current = 5;
    };
    const handleTouchEnd = () => {
      depth.current = -5;
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    // When mouse is being held down move object up
    const handleMouseDown = (e: any) => {
      if (e.target !== canvasRef.current) return;
      e.preventDefault();
      depth.current = 5;
    };
    // When mouse is released move object down
    const handleMouseUp = (e: any) => {
      e.preventDefault();
      depth.current = -5;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  useFrame(({ pointer, viewport }) => {
    const inputX = isMobile ? touchPosition.current.x : pointer.x;
    const inputY = isMobile ? touchPosition.current.y : pointer.y;
    const newPos = {
      x: (inputX * viewport.width) / 2 + (isMobile ? MOBILE_CAMERA_OFFSET : 0),
      y: depth.current,
      z: (-inputY * viewport.height) / 2,
    };

    vec.lerp(newPos, 0.08);
    ref.current?.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody ref={ref} type="kinematicPosition" position={[0, -5, 0]}>
      <BallCollider args={[1.5]} />
      <mesh>
        <sphereGeometry args={[1.5]} />
        <meshPhongMaterial opacity={0} transparent />
        {/* <meshStandardMaterial color="black" transparent opacity={0} /> */}
      </mesh>
    </RigidBody>
  );
};

export default Pointer;
