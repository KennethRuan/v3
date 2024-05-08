import { cn } from "@/utils";
import Image from "next/image";

const HarbourPage = () => {
  return (
    <div className="w-full h-ful text-dusk flex flex-col">
      <div className="text-7xl font-semibold"> harbour </div>
      <div className="h-1 my-2 bg-dusk w-full" />
      <div className="text-md font-semibold">
        {"Next.js, OpenAI, LangChain, Google Cloud"}
      </div>
      <div className="mt-2 text-md flex-col">
        <p>
          {
            "a chatbot designed to simulate real conversations in 70+ languages and dialects."
          }
        </p>
        <p>
          best google cloud hack @ <b className="font-semibold">ht6</b>
        </p>
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
              src="/images/harbour-1.png"
              alt="Harbour"
              className="border-4 border-black object-cover"
              loading="eager"
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
            <Image
              src="/images/harbour-2.png"
              alt="Harbour"
              className="border-4 border-black"
              loading="eager"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const harbourDetails = {
  name: "Harbour",
  year: "2023",
  display: <HarbourPage />,
};

export default harbourDetails;
