"use client";

import Engineering from "@/components/sections/engineering";
import Hero from "@/components/sections/hero";
import Cabinets from "@/components/sections/cabinets";
import { useFullscreenContext } from "@/components/providers/fullscreen-provider";
import { cn } from "@/utils";

export default function Home() {
  const { isFullscreen } = useFullscreenContext();

  return (
    <div className="flex min-h-screen">
      <div
        className={cn(
          `relative w-full overflow-hidden`,
          isFullscreen ? "h-screen" : ""
        )}
      >
        <Hero />
        <Engineering />
        <Cabinets />
      </div>
    </div>
  );
}
