"use client";
import React from "react";
import StatCard from "../../../components/Admin/Dashboard/StatCard";
import Graph from "../../../components/Admin/Dashboard/Graph";
import RecentOrder from "../../../components/Admin/Dashboard/RecentOrder";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center lg:justify-between gap-4 h-full px-[2%] py-[2%]">
      <div className="flex flex-col gap-4 lg:flex lg:flex-row  w-full ">
        <StatCard
          bgColor="bg-[#e7aeae]"
          iconSrc="/admin/icon/main/shopping_cart.svg"
          title="New Orders"
          value="34232"
          percentage="+5.45%"
          period="30 Days"
          arrowIconSrc="/admin/icon/main/arrow_upward_alt.svg"
          textColor="text-[#2FB261]"
        />
        <StatCard
          bgColor="bg-[#D5C8F9]"
          iconSrc="/admin/icon/main/attach_money.svg"
          title="Total Income"
          value="$25,300"
          percentage="+3.20%"
          period="Increased"
          arrowIconSrc="/admin/icon/main/arrow_upward_alt.svg"
          textColor="text-[#2FB261]"
        />
        <StatCard
          bgColor="bg-[#D5FCE4]"
          iconSrc="/admin/icon/main/storefront.svg"
          title="Total Expense"
          value="$12,100"
          percentage="-2.00%"
          period="Expence"
          arrowIconSrc="/admin/icon/main/arrow_downward_alt.svg"
          textColor="text-[#EA0505]"
        />
      </div>
      <Graph />
      <RecentOrder />
    </div>
  );
};

export default Dashboard;
