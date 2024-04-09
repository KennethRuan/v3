"use client";

import Cone from "../engineering/cone";
import Cylinder from "../engineering/cylinder";
import Sphere from "../engineering/sphere";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Engineering = () => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const smoothProg = useSpring(scrollYProgress, { damping: 50, stiffness: 40 });

  const rZ1 = useTransform(smoothProg, [0, 0.2, 0.4, 1], [0, 6, -12, 0]);

  const rX2 = useTransform(smoothProg, [0.1, 0.35, 0.65, 0.9], [0, -15, -5, 0]);
  const rZ2 = useTransform(smoothProg, [0.1, 0.35, 0.65, 0.9], [0, 0, -5, 0]);

  const rX3 = useTransform(smoothProg, [0, 0.3, 0.4, 0.6, 1], [-2, 0, 2, 2, 0]);
  const rZ3 = useTransform(smoothProg, [0, 0.2, 0.5, 0.7, 1], [0, 2, 0, -1, 0]);

  return (
    <div className="relative w-full bg-chalk z-[1] pb-72" ref={sectionRef}>
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
              <div className="px-3 py-1 hover:bg-dusk/10 cursor-pointer flex flex-row items-center text-dusk/80 font-semibold">
                <p>Harbour</p>
                <hr className="flex-1 bg-dusk/20 h-[1px] ml-2 mr-2" />
                <p>2023</p>
              </div>
              <div className="px-3 py-1 hover:bg-dusk/10 cursor-pointer flex flex-row items-center text-dusk/80 font-semibold">
                <p>Signal Vest</p>
                <hr className="flex-1 bg-dusk/20 h-[1px] ml-2 mr-2" />
                <p>2022</p>
              </div>
              <div className="px-3 py-1 hover:bg-dusk/10 cursor-pointer flex flex-row items-center text-dusk/80 font-semibold">
                <p>Navcare</p>
                <hr className="flex-1 bg-dusk/20 h-[1px] ml-2 mr-2" />
                <p>2022</p>
              </div>
              <div className="px-3 py-1 hover:bg-dusk/10 cursor-pointer flex flex-row items-center text-dusk/80 font-semibold">
                <p>Autoslide</p>
                <hr className="flex-1 bg-dusk/20 h-[1px] ml-2 mr-2" />
                <p>2021</p>
              </div>
            </div>
          </div>
          <div className="pl-20 w-3/4 h-[800px]">
            <div className="w-full h-full bg-chalk rounded-l-xl shadow-[0_1px_8px_4px] shadow-dusk/20"></div>
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
