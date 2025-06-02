import React from "react";
import Link from "next/link";

const Payment = () => {
  return (
    <div className="flex flex-col gap-5 md:w-[50%]">
      <span className="font-semibold text-xl">Payment Method</span>
      <div className="flex gap-5">
        <div className="flex gap-3 items-center">
          <input type="radio" name="payment" id="credit" />
          <label htmlFor="cash-on-delivery">Cash on Delivery</label>
        </div>
        <div className="flex gap-3 items-center">
          <input type="radio" name="payment" id="paypal" />
          <label htmlFor="online-payment">Online payment</label>
        </div>
      </div>
      <div className="">
        <span className="font-semibold text-xl">Billing details</span>
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border rounded-sm h-12 p-2"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="relative flex flex-col gap-2">
            <label htmlFor="">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border rounded-sm h-12 p-2"
              placeholder="Phone Number"
              required
            />
            <button className=" absolute top-8 right-0 bg-primary text-white px-8 py-3 rounded-r-sm font-bold">
              Verify
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Full Address <span className="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              className="border rounded-sm h-16 p-2"
              placeholder="Full Address"
              required
            />
          </div>
        </div>
        <div className="md:flex hidden justify-between mt-10">
          <div>
            <input type="checkbox" name="" id="" />{" "}
            <span className="text-[0.8rem]">
              {" "}
              I have read and agree to the{" "}
              <Link href={"#"} className="text-primary font-semibold ">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href={"#"} className="text-primary font-semibold">
                Privacy Policy
              </Link>
            </span>
          </div>
          <div>
            <button className="bg-primary px-6 py-3 text-white font-bold rounded-sm">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
