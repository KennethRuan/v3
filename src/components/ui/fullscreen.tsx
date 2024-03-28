import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import { useFullscreenContext } from "../providers/fullscreen-provider";
import { createPortal } from "react-dom";

type FullscreenComponentProps = {
  children: React.ReactNode;
};

const FullscreenComponent = ({ children }: FullscreenComponentProps) => {
  const fullscreenCont = useFullscreenContext();
  const { isFullscreen, setIsFullscreen } = fullscreenCont;

  const fullscreenStyle =
    "fixed top-0 left-0 w-screen h-screen z-[9999] overflow-hidden touch-none";

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "auto";
  }, [isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = (e: any) => {
    e.preventDefault();
    if (!isFullscreen) {
      setIsFullscreen(true);
      try {
        if (document?.documentElement?.requestFullscreen)
          document.documentElement.requestFullscreen();
      } catch (e) {
        console.error(e);
      }
    } else {
      setIsFullscreen(false);
      try {
        if (document?.exitFullscreen) document.exitFullscreen();
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className={`w-full h-full ${isFullscreen ? fullscreenStyle : ""}`}>
        {children}
      </div>
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 px-4 py-4 border-black text-black cursor-pointer z-[9999]"
      >
        {isFullscreen ? "A" : "B"}
      </button>
    </div>
  );
};

export default FullscreenComponent;
