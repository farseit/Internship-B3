"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebarContext } from "@/context/SidebarContext";
import Image from "next/image";

const AdminHeader = () => {
  const { toggleSidebar } = useSidebarContext();
  return (
    <div className="fixed lg:static flex w-full items-center justify-between lg:justify-end min-h-[97px] max-h-[97px] bg-white shadow-lg px-[5%] z-10">
      <button onClick={toggleSidebar} className="lg:hidden ">
        <FontAwesomeIcon icon={faBars} className="w-10 h-10" />
      </button>
      <div className="flex h-full items-center  gap-8">
        <button>
          <Image
            src="/admin/icon/header/notifications.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="w-[30px] h-[30px]"
          />
        </button>
        <div className="flex items-center gap-2">
          <button>
            <Image
              src="/admin/icon/header/account_circle.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[30px] h-[30px]"
            />
          </button>
          <button>
            <Image
              src="/admin/icon/header/arrow_drop_down.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
