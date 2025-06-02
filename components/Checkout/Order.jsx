"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
const Order = () => {
  const { cartProducts, cartTotalPrice, increaseQuantity, decreaseQuantity } = useCartContext();
  console.log(cartProducts, cartTotalPrice);
  return (
    <div className="flex flex-col gap-5 md:border-l md:w-[45%] md:px-4">
      <span className="font-semibold text-xl">Your Order</span>
      {/*Product container */}
      {
        cartProducts && cartProducts.map((order, index) => (
          <div className="flex items-center justify-between " key={index}>
            <div className="flex items-center gap-3">
              <Image
                src={order.image[0]}
                alt={order.name}
                width={1080}
                height={1080}
                className="w-[60px] h-[60px]"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{order.name}</span>
                {/* <span className="text-primary">
                  {order.desc}
                </span> */}
              </div>
            </div>
            <div className="text-center">
              <div className="border border-black rounded-md gap-3 flex justify-between px-2 py-1 cursor-pointer">
                <span onClick={() => decreaseQuantity(order.Id)}>-</span>
                <input
                  type="text"
                  value={order.quantity}
                  className="w-7 sm:w-8 h-6 text-center outline-none bg-slate-300/20"
                />
                <span onClick={() => increaseQuantity(order.Id)}>+</span>
              </div>
              <div className="font-bold">
                <span>{order.price}</span>
              </div>
            </div>
          </div>
        ))
      }

      <hr />
      <div className="flex items-center gap-2 ">
        <input
          type="text"
          placeholder="Coupon Code"
          className="px-2 h-10 w-full font-SFProDisplayLight outline-none border border-card-3 rounded"
        />
        <button className="bg-[#cacacc] text-[#f9f9f9] hover:bg-primary font-SFProDisplayMedium inline-block max-w-[120px] md:max-w-[145px] w-full h-10 capitalize font-semibold rounded">
          Apply
        </button>
      </div>
      <hr />
      <div class="space-y-2 mt-4">
        <div class=" flex justify-between">
          <span>Subtotal</span>
          <span>{cartTotalPrice}</span>
        </div>
        <div class=" flex justify-between">
          <span>Delivery Charge</span>
          <span class=" max-w-[260px] flex items-center cursor-pointer gap-1 tracking-tight text-xs relative group">
            <svg
              class="w-3.5 h-3.5 fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="26px"
              height="26px"
            >
              <path d="M 13 1.1875 C 6.476563 1.1875 1.1875 6.476563 1.1875 13 C 1.1875 19.523438 6.476563 24.8125 13 24.8125 C 19.523438 24.8125 24.8125 19.523438 24.8125 13 C 24.8125 6.476563 19.523438 1.1875 13 1.1875 Z M 15.460938 19.496094 C 14.851563 19.734375 14.367188 19.917969 14.003906 20.042969 C 13.640625 20.167969 13.222656 20.230469 12.742188 20.230469 C 12.007813 20.230469 11.433594 20.050781 11.023438 19.691406 C 10.617188 19.335938 10.414063 18.878906 10.414063 18.324219 C 10.414063 18.109375 10.429688 17.890625 10.460938 17.667969 C 10.488281 17.441406 10.539063 17.191406 10.605469 16.90625 L 11.367188 14.21875 C 11.433594 13.960938 11.492188 13.71875 11.539063 13.488281 C 11.585938 13.257813 11.605469 13.046875 11.605469 12.855469 C 11.605469 12.515625 11.535156 12.273438 11.394531 12.140625 C 11.25 12.003906 10.980469 11.9375 10.582031 11.9375 C 10.386719 11.9375 10.183594 11.96875 9.976563 12.027344 C 9.769531 12.089844 9.59375 12.148438 9.445313 12.203125 L 9.648438 11.375 C 10.144531 11.171875 10.621094 11 11.078125 10.855469 C 11.53125 10.710938 11.964844 10.636719 12.367188 10.636719 C 13.097656 10.636719 13.664063 10.816406 14.058594 11.167969 C 14.453125 11.519531 14.652344 11.980469 14.652344 12.542969 C 14.652344 12.660156 14.640625 12.867188 14.613281 13.160156 C 14.585938 13.453125 14.535156 13.722656 14.460938 13.972656 L 13.703125 16.652344 C 13.640625 16.867188 13.585938 17.113281 13.535156 17.386719 C 13.488281 17.660156 13.464844 17.871094 13.464844 18.011719 C 13.464844 18.367188 13.542969 18.613281 13.703125 18.742188 C 13.859375 18.871094 14.136719 18.933594 14.53125 18.933594 C 14.714844 18.933594 14.921875 18.902344 15.15625 18.839844 C 15.386719 18.773438 15.554688 18.71875 15.660156 18.667969 Z M 15.324219 8.617188 C 14.972656 8.945313 14.546875 9.109375 14.050781 9.109375 C 13.554688 9.109375 13.125 8.945313 12.769531 8.617188 C 12.414063 8.289063 12.238281 7.890625 12.238281 7.425781 C 12.238281 6.960938 12.417969 6.558594 12.769531 6.226563 C 13.125 5.894531 13.554688 5.730469 14.050781 5.730469 C 14.546875 5.730469 14.972656 5.894531 15.324219 6.226563 C 15.679688 6.558594 15.855469 6.960938 15.855469 7.425781 C 15.855469 7.890625 15.679688 8.289063 15.324219 8.617188 Z"></path>
            </svg>{" "}
            will be added
            <div class="absolute right-[75px] p-1.5 bg-white shadow-md rounded-b w-[240px] top-[80%] hidden group-hover:flex flex-col animated fadeInUp mt-1.5 before:absolute before:-top-[6px] before:-right-0 before:border-[6px] before:border-t-0 before:border-transparent before:border-b-white">
              Delivery charges will be added according to your location and
              delivery method. Pick up from the shop is free!
            </div>
          </span>
        </div>
      </div>
      <hr />
      <div class=" flex justify-between">
        <span>Total</span>
        <span>BDT {cartTotalPrice}</span>
      </div>
      <div className="md:hidden flex flex-col gap-5 items-center mt-2">
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
  );
};

export default Order;
