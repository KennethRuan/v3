import React, { useEffect, useState } from "react";

type FullscreenComponentProps = {
  children: React.ReactNode;
};

const FullscreenComponent = ({ children }: FullscreenComponentProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      document.body.style.overflow = !!document.fullscreenElement
        ? "hidden"
        : "";
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = (e: any) => {
    e.preventDefault();
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .catch((e) => console.error(e));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((e) => console.error(e));
      }
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full">{children}</div>
      <button
        onClick={toggleFullscreen}
        className="absolute top-2 right-2 px-4 py-4 border-black text-black cursor-pointer"
      >
        {isFullscreen ? "A" : "B"}
      </button>
    </div>
  );
};

export default FullscreenComponent;
