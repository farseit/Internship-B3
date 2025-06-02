"use client";
import React from "react";
import Image from "next/image";
import ButtonSidebar from "./ButtonSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  return (
    <div
      className={`fixed z-40 top-0 left-0 min-h-screen  max-w-[292px] bg-primary dark:bg-black dark:text-white shadow-2xl transform transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static `}
    >
      <div className="flex flex-col justify-between min-h-screen  w-full px-8 py-5 max-h-screen overflow-y-auto gap-4">
        <div className="flex flex-col gap-14">
          <div className="flex items-center gap-3">
            <Image
              src="/admin/icon/sidebar/logo.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="h-[43px] w-[43px]"
            />
            <div className="flex justify-between w-full">
              <h1 className="font-bold text-2xl text-gray-600">Dashtail</h1>
              {/* Close button for mobile view only */}
              <button onClick={closeSidebar} className="lg:hidden">
                <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
              </button>
            </div>
          </div>
          <ButtonSidebar />
        </div>
        <div className="flex justify-center">
          <button className="bg-slate-300 w-[196px] h-[52px] rounded-md text-black flex items-center justify-center gap-2">
            <Image
              src="/admin/icon/sidebar/logout.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[15px] h-[15px]"
              style={{ filter: "invert(100%)" }}
            />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
