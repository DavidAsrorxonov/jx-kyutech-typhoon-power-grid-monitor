import Image from "next/image";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="px-8 py-1 h-fit border-b border-primary/30 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={"/typhoont.png"}
          alt="typhoon"
          width={60}
          height={60}
          className="aspect-square"
        />
        <span className="font-mono text-2xl">Kaminari Shield</span>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
