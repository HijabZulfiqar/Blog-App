import React from "react";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div>
      <h1 className=" font-bold my-[50px] mx-0 ">Popular Categories</h1>
      <div className="flex flex-wrap  justify-between gap-6 ">
        <Link
          href="/blog?cat=style"
          className="flex  items-center gap-2 uppercase w-[15%] h-16 justify-center  rounded-[10px]  bg-[#57c4ff31] "
        >
          <Image
            src="/style.png"
            alt=""
            className="rounded-full"
            width={28}
            height={16}
          />
          tech
        </Link>

        <Link
          href="/blog?cat=style"
          className="flex  items-center gap-2 uppercase w-[15%] h-16 justify-center  rounded-[10px]  bg-[#da85c731] "
        >
          <Image
            src="/style.png"
            alt=""
            className="rounded-full"
            width={28}
            height={16}
          />
          tech
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex  items-center gap-2 uppercase w-[15%] h-16 justify-center  rounded-[10px]  bg-[#7fb88133] "
        >
          <Image
            src="/style.png"
            alt=""
            className="rounded-full"
            width={28}
            height={16}
          />
          tech
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex  items-center gap-2 uppercase w-[15%] h-16 justify-center  rounded-[10px]  bg-[#ff795736;] "
        >
          <Image
            src="/style.png"
            alt=""
            className="rounded-full"
            width={28}
            height={16}
          />
          tech
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
