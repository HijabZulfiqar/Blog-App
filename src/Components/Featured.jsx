import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <div className="  mt-7   mx-auto  ">
      <h1 className="md:text[48px] sm:text-[36px]  lg:text-[52px]  xl:text-[72px] 2xl:text-[88px]   font-light">
        <b>Hey, <span className="font-bold">Folks</span> here!</b> Discover my stories and creative ideas.
      </h1>
      <div className=" mt-14 flex items-center gap-12">
        <div className=" hidden lg:block flex-1 h-[350px] relative ">
          <Image src="/pics.jpeg" fill className=" object-cover" />
        </div>
        <div className=" flex-1 flex flex-col gap-5 ">
          <h1 className=" text-lg md:text-2xl lg:text-4xl font-bold ">
            Tech Trends Unleashed: Stay Ahead of the Curve.
          </h1>
          <p className=" text-base md:text-xl font-light">
            Explore the frontier of technology with 'Tech Trends Unleashed.'
            Dive into the latest innovations, breakthroughs, and expert analyses
            that help you stay ahead in a rapidly evolving digital world.
            Whether you're a tech enthusiast or a seasoned professional, our
            insights will fuel your passion and keep you informed.
          </p>
          <button className="px-5 text-black py-1 md:spy-3 bg-gray-200  rounded-md w-max">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
