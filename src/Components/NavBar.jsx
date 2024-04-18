import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle/Themetoggle";
const NavBar = () => {
  return (
    <div className=" flex  items-center justify-between h-28  ">
      <div className="lg:flex gap-2 flex-1 hidden ">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className=" flex-1 text-left md:text-center   2xl:text-3xl font-bold lg:text-xl  text-lg">
        TrendTaleblog
      </div>
      <div className=" flex  items-center justify-end lg:gap-5 flex-1 lg:text-xl text-lg gap-4  ">
        <ThemeToggle />
        <Link
          href="/"
          className="hidden md:flex items-center gap-5 flex-1 text-xl"
        >
          Homepage
        </Link>
        <Link
          href="/"
          className=" hidden  md:flex items-center gap-5 flex-1 text-xl"
        >
          Contact
        </Link>
        <Link
          href="/"
          className=" hidden  md:flex items-center gap-5 flex-1 text-xl"
        >
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default NavBar;
