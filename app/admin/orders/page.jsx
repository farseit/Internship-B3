"use client";
import React from "react";
import OrderTable from "../../../components/Admin/Orders/OrderTable";


const Orders = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="flex flex-col gap-6 w-full h-full px-[2%] py-[2%]">
      <div className="flex justify-between">
        <div className="flex gap-0  items-center">
          <span className="text-xl font-semibold ">Order</span>
          <span className="text-xs  pt-4 text-gray-500">15 orders found</span>
        </div>
        <div className="shadow-xl overflow-hidden">
          <input
            id="date"
            type="date"
            className="bg-primary text-white rounded-md font-bold md:px-8 px-4 py-3"
          />
        </div>
      </div>
      <div className="flex gap-10 text-gray-400 mb-5">
        <button className="hover:underline hover:text-green-400">
          All Orders
        </button>
        <button className="hover:underline hover:text-green-400">
          Completed
        </button>
        <button className="hover:underline hover:text-green-400">
          Pending
        </button>
        <button className="hover:underline hover:text-green-400">
          Canceled
        </button>
      </div>
      <OrderTable />
    </div>
  );
};

export default Orders;
