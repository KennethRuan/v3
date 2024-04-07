"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { motion } from "framer-motion";

const Cabinets = () => {
  return (
    <div className="bg-creme">
      <div className="px-4 w-screen lg:px-20 py-48">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(min(600px,100%),1fr))] gap-20">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-dusk/30">videography.</div>
            <Cabinet />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-dusk/30">wip.</div>
            <Cabinet />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-dusk/30">wip.</div>
            <Cabinet />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-bold text-dusk/30">wip.</div>
            <Cabinet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinets;

const Cabinet = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (op: boolean) => {
    document.body.style.paddingRight = open ? "0px" : "";
    setOpen(op);
  };

  return (
    <Drawer open={open} onOpenChange={handleOpenChange} modal>
      <DrawerTrigger>
        <motion.div
          className="relative w-full h-80 rounded-xl shadow-[0_0_6px_2px] shadow-darkcafe/20"
          initial={{ scale: 1 }}
          // whileHover={{ scale: 1.005 }}
          animate={{ scale: open ? 1.05 : 1 }}
          transition={{ easeIn: [0.57, -0.01, 0.63, 0.3], duration: 0.5 }}
        >
          <motion.div
            className="absolute bottom-0 w-full h-1/5 bg-gradient-to-b from-50% from-darkcafe/40 to-transparent z-[-1]"
            initial={{ translateY: 0 }}
            animate={{ translateY: open ? "60%" : 0 }}
            transition={{ easeIn: [0.57, -0.01, 0.63, 0.3], duration: 0.5 }}
          />
          <div className="w-full h-full rounded-xl bg-creme z-[1]">
            <div className="top-8 left-0 w-full absolute flex justify-center z-[1]">
              <div className="relative w-2/5 h-8 rounded-full bg-creme shadow-[0_0_10px_5px] shadow-darkcafe/20">
                <div className="absolute top-0 left-0 w-full h-full flex justify-between -z-[1]">
                  <div className="h-8 w-8 rounded-full shadow-[0_0_10px_1px] shadow-darkcafe/20" />
                  <div className="h-8 w-8 rounded-full shadow-[0_0_10px_1px] shadow-darkcafe/20" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </DrawerTrigger>
      <DrawerContent className="bg-chalk border-b-0">
        <div className="h-80 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-dusk">Work In Progress.</div>
          <div className="text-lg text-center text-dusk">
            This section is still under construction. See you soon 🫡
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
