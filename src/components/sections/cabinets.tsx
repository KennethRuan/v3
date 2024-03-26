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

const Cabinets = () => {
  return (
    <div className="bg-creme">
      <div className="px-20 py-20">
        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(min(600px,100%),1fr))] gap-20">
          <Cabinet />
        </div>
      </div>
    </div>
  );
};

export default Cabinets;

const Cabinet = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-[0_0_6px_2px] shadow-darkcafe/20">
          <div className="top-8 left-0 w-full absolute flex justify-center z-[1]">
            <div className="relative w-2/5 h-8 rounded-full bg-creme shadow-[0_0_10px_5px] shadow-darkcafe/20">
              <div className="absolute top-0 left-0 w-full h-full flex justify-between -z-[1]">
                <div className="h-8 w-8 rounded-full shadow-[0_0_10px_1px] shadow-darkcafe/20" />
                <div className="h-8 w-8 rounded-full shadow-[0_0_10px_1px] shadow-darkcafe/20" />
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-creme-400">Open</div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-chalk border-b-0">
        <DrawerHeader className="text-black">
          <DrawerTitle>Testing</DrawerTitle>
          <DrawerDescription>1234</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
