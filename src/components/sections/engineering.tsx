"use client";

import Cone from "../engineering/cone";
import Cylinder from "../engineering/cylinder";
import Sphere from "../engineering/sphere";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import projects from "../engineering/projects";

const Engineering = () => {
  const [selected, setSelected] = useState(-1);
  const [hovered, setHovered] = useState(-1);

  const handleClick = (index: number) => {
    setSelected((p) => (p === index ? -1 : index));
  };
  const handleHover = (index: number) => {
    setHovered(index);
  };
  const handleBlur = () => {
    setHovered(-1);
  };

  return (
    <div className="relative w-full bg-chalk z-[1] pb-72">
      <div className="flex flex-col">
        <div className="w-full flex flex-col text-dusk py-12 px-8">
          <div className="font-bold text-3xl"> engineering. </div>
          <div className="text-lg">i wanna be a systems architect.</div>
          <div className="text-lg">
            want to build cool backends make the world go brrrr.
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex-1 pr-12">
            <div className="min-h-[500px] py-2 bg-chalk rounded-r-xl shadow-[0_1px_8px_4px] shadow-dusk/20 text-black overflow-hidden">
              <div className="px-3 pt-4 text-taupe text-xs font-bold">
                PROJECTS
              </div>

              {projects.map((project, index) => (
                <div
                  className={`px-3 py-1 hover:bg-dusk/10 cursor-pointer flex flex-row items-center text-taupe font-semibold ${
                    selected === index && "text-dusk bg-dusk/10"
                  }`}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleBlur}
                >
                  <p>{project.name}</p>
                  <hr className="flex-1 bg-dusk/20 h-[1px] ml-2 mr-2" />
                  <p>{project.year}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pl-20 w-3/4 h-[800px]">
            <div className="w-full h-full bg-chalk rounded-l-xl shadow-[0_1px_8px_4px] shadow-dusk/20 overflow-hidden py-4 px-8">
              {hovered > -1
                ? projects?.[hovered]?.display
                : projects?.[selected]?.display}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 -right-12 z-[-1]">
        <motion.div
          initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
          animate={{ rotateZ: 15 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 5,
          }}
        >
          <Sphere className="drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </div>
      <div className="absolute top-36 left-0 z-[-1]">
        <motion.div
          initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
          animate={{ rotateX: -15, rotateZ: 5 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 3,
          }}
        >
          <Cylinder className="drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </div>
      <div className="absolute bottom-12 -left-10 z-[1]">
        <motion.div
          initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
          animate={{ rotateX: -3, rotateZ: 3 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            duration: 4,
          }}
        >
          <Cone className="drop-shadow-[2px_8px_4px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Engineering;
