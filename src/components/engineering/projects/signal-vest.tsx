import { cn } from "@/utils";
import Image from "next/image";

const SignalVestPage = () => {
  return (
    <div className="w-full h-ful text-dusk flex flex-col">
      <div className="text-7xl font-semibold"> signal vest </div>
      <div className="h-1 my-2 bg-dusk w-full" />
      <div className="text-md font-semibold">{"Arduino"}</div>
      <div className="mt-2 text-md flex-col">
        <p>{"a vest for bikers to mimic the signaling system of a vehicle."}</p>
      </div>
      <div className="h-8" />
      <div className="relative w-full max-w-[1000px] h-[460px] space-y-5">
        <div
          className={cn(
            "relative w-full aspect-[19/10]",
            "lg:absolute lg:w-2/3 top-0 left-0"
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/signal-1.jpeg"
              alt="Navcare Highlights"
              className="border-4 border-black object-cover"
              fill
            />
          </div>
        </div>
        <div
          className={cn(
            "relative w-full aspect-[16/10]",
            "lg:absolute lg:w-3/5 bottom-0 right-0"
          )}
        >
          <div className="relative w-full h-full">
            <video
              className="border-4 border-black object-cover"
              src="/videos/signal-video.mp4"
              muted
              poster="/images/signal-2.jpeg"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const signalVestDetails = {
  name: "Signal Vest",
  year: "2022",
  display: <SignalVestPage />,
};

export default signalVestDetails;
