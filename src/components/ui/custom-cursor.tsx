// Custom cursor that follows the mouse within the wrapped children.

import React, { useEffect, useRef } from "react";

const CustomCursor = ({ children }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const customCursorSectionRef = useRef<HTMLDivElement>(null);

  useEffect(function followMouse() {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
      cursorRef.current.style.transform = "translate(-50%, -50%)";
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(function fillCursor() {
    // On mouse down, fill the cursor
    const handleMouseDown = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.backgroundColor = "black";
    };

    // On mouse up, reset the cursor
    const handleMouseUp = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.backgroundColor = "transparent";
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(function checkCursorVisibility() {
    if (!customCursorSectionRef.current) return;

    const handleMouseEnter = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.opacity = "0";
    };

    customCursorSectionRef.current.addEventListener(
      "mouseenter",
      handleMouseEnter
    );
    customCursorSectionRef.current.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    return () => {
      customCursorSectionRef.current.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
      customCursorSectionRef.current.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div className="relative w-full h-full cursor-none">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-20 h-20 border border-black rounded-full pointer-events-none z-[9999]"
      />
      <div className="w-full h-full" ref={customCursorSectionRef}>
        {children}
      </div>
    </div>
  );
};

export default CustomCursor;
