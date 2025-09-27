import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import TyphoonTracker from "@/components/TyphoonData";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      {/* <div className="px-8 pt-10 w-[700px]">
        <Map />
      </div> */}
      <TyphoonTracker />
    </div>
  );
}
