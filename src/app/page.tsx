import Engineering from "@/components/sections/engineering";
import Hero from "@/components/sections/hero";
import Cabinets from "@/components/sections/cabinets";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className={`relative w-full overflow-hidden`}>
        <Hero />
        <Engineering />
        <Cabinets />
      </div>
    </div>
  );
}
