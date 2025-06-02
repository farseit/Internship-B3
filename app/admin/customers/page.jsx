"use client";
import React, { useState } from "react";
import CustomerTable from "../../../components/Admin/Customers/CustomerTable";
import Search from "../../../components/Admin/Customers/Search";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col gap-6 w-full h-full px-[2%] lg:py-[2%] py-[120px]">
      <div className="flex justify-between">
        <Search setSearchQuery={setSearchQuery} />
        <div className="overflow-hidden rounded-md shadow-xl">
          <button className="flex items-center gap-2 bg-primary md:px-8 px-4 py-3 text-white font-semibold h-full  ">
            <span>+</span>
            <span>Add Customer</span>
          </button>
        </div>
      </div>
      <CustomerTable searchQuery={searchQuery} />
    </div>
  );
};

export default Customers;
