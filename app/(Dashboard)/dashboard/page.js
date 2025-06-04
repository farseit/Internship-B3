"use client";
import React from "react";
import OrderSummery from "./DashboardHome/OrderSummery/OrderSummery";
import DashboardLayout from "./Layout";
import OrderStatus from "./DashboardHome/OrderStatus/OrderStatus";
const page = () => {
  return (
    <DashboardLayout>
      <OrderSummery />
      <OrderStatus />
    </DashboardLayout>
  );
};

export default page;
