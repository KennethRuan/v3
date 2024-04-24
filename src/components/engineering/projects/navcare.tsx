import Image from "next/image";

const NavcarePage = () => {
  return (
    <div className="w-full h-ful text-dusk flex flex-col">
      <div className="text-7xl font-semibold"> navcare </div>
      <div className="h-1 my-2 bg-dusk w-full" />
      <div className="text-md font-semibold">
        {"Django, React, HTML, Javascript, CSS"}
      </div>
      <div className="mt-2 text-md flex-col">
        <p>{"optimized scheduling platform for personal support workers."}</p>
        <p>
          finalist @ <b>hack the north 2022</b>
        </p>
      </div>
      <div className="h-8" />
      <div className="relative w-full h-[460px]">
        <div className="absolute top-0 left-0 w-2/3 aspect-[19/10]">
          <div className="relative w-full h-full">
            <Image
              src="/images/navcare-1.png"
              alt="Navcare Highlights"
              className="border-4 border-black object-contain"
              fill
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-3/5 aspect-[16/10] bg-white">
          <div className="relative w-full h-full">
            <Image
              src="/images/navcare-2.jpeg"
              alt="Harbour"
              className="border-4 border-black object-contain"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const navcareDetails = {
  name: "Navcare",
  year: "2022",
  display: <NavcarePage />,
};

export default navcareDetails;
