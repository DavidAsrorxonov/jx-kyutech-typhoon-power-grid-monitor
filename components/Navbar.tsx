import Image from "next/image";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-background z-50 px-8 py-1 h-fit border-b border-primary/30 flex items-center justify-between">
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
      <div className="flex items-center gap-5">
        <Link href={"/map"} className={buttonVariants({ variant: "outline" })}>
          View on the map
          <SquareArrowOutUpRight className="ml-2" />
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
