"use client";
import React from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const AuthLinks = () => {
  const status = "notAuthenticated";
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:flex items-center gap-5 flex-1 text-xl hidden">
        {status === "notAuthenticated" ? (
          <Link href="/login">Login</Link>
        ) : (
          <div className="items-center gap-5 flex-1 text-xl hidden md:flex">
            <Link href="/write">WriteIn</Link>
            <span className="cursor-pointer">Logout</span>
          </div>
        )}
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl cursor-pointer"
      >
        {open ? <FiX /> : <FiMenu />}
      </div>
      {open && (
        <div className=" md:hidden   ">
          <div className="flex bg-custom-bg   flex-col z-50 justify-center h-screen-minus-100  w-full  absolute top-20 left-0  items-center text-4xl  gap-6">
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            {status === "notAuthenticated" ? (
              <Link href="/login">Login</Link>
            ) : (
              <div>
                <Link href="/write">WriteIn</Link>
                <span className="cursor-pointer">Logout</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLinks;
