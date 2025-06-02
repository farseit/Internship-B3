'use client'
import React from "react";
import Image from "next/image";
import CatTable from "../../../components/Admin/Category/CatTable";


const Category = () => {
  return (
    <div className=" flex flex-col gap-6 w-full h-full px-[2%] py-[2%]">
      <div className="flex w-full justify-between items-center">
        <span className="text-xl font-bold">Category</span>
        {/* {Create category button} */}
        <button className="bg-primary text-white md:px-14 px-4 py-3  flex items-center font-bold gap-2 rounded-lg shadow-lg">
          <Image
            src="/admin/icon/main/add_circle.svg"
            alt="alt"
            width={1080}
            height={1080}
            className="h-[20px] w-[20px]"
          />
          <span>Create</span>
        </button>
      </div>
      <div className="flex gap-10 text-gray-400 mb-5">
        <button className="hover:underline hover:text-green-400">All</button>
        <button className="hover:underline hover:text-green-400">
          Enabled
        </button>
      </div>
      <CatTable />
    </div>
  );
};

export default Category;

