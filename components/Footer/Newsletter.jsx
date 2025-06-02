import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[24px] font-semibold font-lato text-white">
        NEWSLETTER
      </h1>
      <div className="flex gap-[0.1rem]">
        <span className="h-[2px] w-[40px] bg-[#2FB261] rounded-full"></span>
        <span className="h-[2px] w-[10px] bg-[#2FB261] rounded-full"></span>
        <span className="h-[2px] w-[5px] bg-[#2FB261] rounded-full"></span>
      </div>
      <p>
        Stay updated with our latest news and offers. Subscribe to our newsletter and never miss out!
      </p>
      <div className="flex flex-col gap-3">
        <input
          type="email"
          className="w-full h-[56px] bg-transparent border border-[#838790] rounded-lg  px-5 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="w-full h-[56px] bg-[#2FB261] rounded-lg text-[20px] font-bold text-white">
          SUBSCRIBE
        </button>
      </div>
      <div className="mt-8">
        <Image
          src="/img/FooterImg/others/companies.svg"
          alt="companies"
          width={1080}
          height={1080}
          className="h-[32px] w-full"
        />
      </div>
    </div>
  );
};

export default Newsletter;
