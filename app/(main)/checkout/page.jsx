
import Order from "@/components/Checkout/Order";
import Payment from "@/components/Checkout/Payment";

import React from "react";

const Checkout = () => {
 

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 justify-between py-[2%] md:px-[14%] px-[4%] pb-10">
        <Payment />
        <Order />
      </div>
    </>
  );
};

export default Checkout;
