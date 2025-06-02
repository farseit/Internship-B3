import React from "react";
import Image from "next/image";
import Link from "next/link";

const Info = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Image
        src="/img/FooterImg/logo1.png"
        alt="Logo"
        width={200}
        height={100}
        className="max-h-[65.23px] min-h-[65.23px] w-[146.66px]"
      />
      <p>
        Welcome to our e-commerce platform. We offer high-quality products at
        competitive prices. Enjoy secure payment options and fast shipping.
        Thank you for choosing us.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-1">
          <Image
            src="/img/FooterImg/footericons/location.png"
            alt="alt"
            width={1080}
            height={1080}
            className="w-6 h-6"
          />
          <span>1234 Heaven Stress, Beverly Hill, Australia</span>
        </div>
        <div className="flex gap-1">
          <Image
            src="/img/FooterImg/footericons/phone.png"
            alt="alt"
            width={1080}
            height={1080}
            className="w-6 h-6"
          />
          <span>(800) 123 456 789</span>
        </div>
        <div className="flex gap-1 items-center ">
          <Image
            src="/img/FooterImg/footericons/email.png"
            alt="alt"
            width={1080}
            height={1080}
            className="w-6 h-4"
          />
          <span>example@email.com</span>
        </div>
        <div className="flex gap-2 mt-2">
          <Link href={"/"} className="p-3 bg-[#2FB261]">
            <Image
              src="/img/FooterImg/socials/facebook.png"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[9px] h-[14px] "
            />
          </Link>
          <Link href={"/"} className="p-3 bg-[#222224]">
            <Image
              src="/img/FooterImg/socials/twitter.png"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[14px] h-[14px] "
            />
          </Link>
          <Link href={"/"} className="p-3 bg-[#222224]">
            <Image
              src="/img/FooterImg/socials/youtube.png"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[16px] h-[14px]"
            />
          </Link>
          <Link href={"/"} className="p-3 bg-[#222224]">
            <Image
              src="/img/FooterImg/socials/linkdin.png"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[13px] h-[14px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
