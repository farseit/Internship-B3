import React from "react";
import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col gap-3 lg:items-center">
      <h1 className="text-[24px] font-semibold font-lato text-white">LINKS</h1>
      <div className="flex gap-[0.1rem]">
        <span className="h-[2px] w-[40px] bg-[#2FB261] rounded-full"></span>
        <span className="h-[2px] w-[10px] bg-[#2FB261] rounded-full"></span>
        <span className="h-[2px] w-[5px] bg-[#2FB261] rounded-full"></span>
      </div>
      <div className="flex flex-col gap-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Shop</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Links;
