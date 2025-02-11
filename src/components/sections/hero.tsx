"use client";

import React from "react";
import FullscreenComponent from "../ui/fullscreen";
import Scene from "../three/scene";
import { cn } from "@/utils";
import { Anek_Latin } from "next/font/google";
import CustomCursor from "../ui/custom-cursor";

export const anek = Anek_Latin({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className={cn("relative w-full h-screen", anek.className)}>
      <FullscreenComponent>
        <CustomCursor>
          <div className="w-full h-full bg-creme">
            <div className="absolute w-full h-full top-0 left-0">
              <div className="relative w-full h-full lg:w-fit lg:ml-[20%] items-center lg:items-start justify-center flex flex-col text-dusk">
                <div className="w-fit">
                  <div>
                    <div className="font-semibold text-2xl lg:text-4xl">
                      {"hey i'm kenneth."}
                    </div>
                    <div className="font-normal text-lg lg:text-2xl">
                      {"i'm a software engineering student @ uw."}
                    </div>
                  </div>
                  <div className="font-normal text-lg lg:text-2xl">
                    {"trying to be a sponge!"}
                  </div>
                  <div className="h-4" />
                  <div className="text-lg lg:text-2xl">currently...</div>
                  <ul className="list-disc list-inside text-lg lg:text-2xl">
                    <li>
                      <span className="line-through">
                        building a music distribution platform
                      </span>
                    </li>
                    <li>learning videography</li>
                    <li>
                      <span className="line-through">
                        trying to run a half marathon
                      </span>
                    </li>
                    <li>learning to build a multiplayer game</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative z-[1] w-full h-full">
              <Scene />
            </div>
          </div>
        </CustomCursor>
      </FullscreenComponent>
    </div>
  );
}
