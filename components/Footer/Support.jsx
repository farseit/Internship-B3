import React from "react";
import Link from "next/link";

const Support = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[24px] font-semibold font-lato text-white">
        Help/Support
      </h1>
      <div className="flex gap-[0.1rem]">
        <span className="h-[2px] w-[40px] bg-[#2FB261] rounded-full"></span>
        <span className="h-[2px] w-[10px] bg-[#2FB261] rounded-full"></span>
        <span className="h-[2px] w-[5px] bg-[#2FB261] rounded-full"></span>
      </div>
      <div className="flex flex-col gap-3">
        <Link href={"/"}>FAQ</Link>
        <Link href={"/"}>Shipping Info </Link>
        <Link href={"/"}>Returns</Link>
      </div>
    </div>
  );
};

export default Support;
