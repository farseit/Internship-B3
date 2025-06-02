import React from "react";
import Link from "next/link";
import Info from "./Info";
import Newsletter from "./Newsletter";
import Links from "./Links";
import Support from "./Support";

const Footer = () => {
  return (
    <div className="bg-[#0b1737] text-[#838790] text-[15px] px-[5%] py-[20px] min-h-[529px] lg:mb-0 mb-[4rem]">
      <div className="main grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {/* Logo and Info */}
        <Info />
        {/* Newsletter */}
        <Newsletter />
        {/* Links */}
        <Links />
        {/* {Help/Support} */}
        <Support />
      </div>
      <div className="buttom-part mt-10 font-lato text-[16px]">
        <hr className="bg-[#838790]/50 h-[2px] border-0" />
        <div className="md:flex justify-between mt-6">
          <span className="text-white">
            2023 - Design & Copyright By @Example
          </span>
          <div className="md:flex md:flex-row flex flex-col gap-4 mt-5 md:mt-0">
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms of Service</Link>
            <Link href={"/"}>Cookies Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
