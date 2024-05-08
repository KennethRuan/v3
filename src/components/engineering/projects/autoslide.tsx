import Image from "next/image";

const AutoslidePage = () => {
  return (
    <div className="w-full h-ful text-dusk flex flex-col">
      <div className="text-7xl font-semibold"> autoslide </div>
      <div className="h-1 my-2 bg-dusk w-full" />
      <div className="text-md font-semibold">
        {"Django, HTML, CSS, Javascript"}
      </div>
      <div className="mt-2 text-md flex-col">
        <p>{"built to automatically fill out your powerpoints with images."}</p>
      </div>
      <div className="h-8" />
      <div className="relative w-full max-w-[1000px] h-[460px]">
        <div className="absolute top-0 left-0 w-full lg:w-4/5 aspect-[19/10]">
          <div className="relative w-full h-full">
            <Image
              src="/images/autoslide-1.jpeg"
              alt="Autoslide Banner"
              className="border-4 border-black object-cover"
              loading="eager"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const autoslideDetails = {
  name: "Autoslide",
  year: "2021",
  display: <AutoslidePage />,
};

export default autoslideDetails;
