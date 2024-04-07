import Cone from "../engineering/cone";
import Cylinder from "../engineering/cylinder";
import Sphere from "../engineering/sphere";
import { motion } from "framer-motion";

const Engineering = () => {
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
            <div className="min-h-[500px] flex flex-col bg-chalk rounded-r-xl shadow-[0_1px_8px_4px] shadow-dusk/20 text-black">
              <div>text</div>
              <div>text</div>
              <div>text</div>
              <div>text</div>
            </div>
          </div>
          <div className="pl-20 w-3/4 h-[800px]">
            <div className="w-full h-full bg-chalk rounded-l-xl shadow-[0_1px_8px_4px] shadow-dusk/20"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-4 -right-12 z-[-1]">
        <Sphere />
      </div>
      <div className="absolute top-36 left-0 z-[-1]">
        <Cylinder />
      </div>
      <div className="absolute bottom-12 -left-10 z-[1]">
        <Cone />
      </div>
      {/* <div className="relative shadow-[0_0_16px_5px] shadow-darkcafe px-10 py-12 pb-24">
        <div className="w-full flex flex-col text-chalk">
          <div className="font-bold text-3xl"> engineering. </div>
          <div className="text-lg">i wanna be a systems architect.</div>
          <div className="text-lg">
            want to build cool backends make the world go brrrr.
          </div>
        </div>
        <div className="h-12" />
        <div className="w-full flex flex-col items-center gap-2 text-chalk text-2xl">
          <div className="flex flex-row gap-2">
            {["harbour", "navcare", "signalvest"].map((entry, i) => (
              <>
                <div key={`${i}-entry`}>{entry}</div>
                <div key={`${i}-dash`}>|</div>
              </>
            ))}
          </div>
        </div>
        <div className="h-12" />
        <div className="flex items-center justify-center">
          <div className="w-[60%] aspect-[16/9] bg-creme rounded-2xl"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Engineering;
