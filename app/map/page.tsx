import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import React from "react";

const MapPage = () => {
  return (
    <div>
      <Navbar />

      <div className="px-8 pt-10 w-[900px] h-[500px]">
        <Map />
      </div>
    </div>
  );
};

export default MapPage;
