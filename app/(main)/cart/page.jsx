"use client";
import React from "react";
import CartProductCard from "@/components/Cart/CartProductCard";
import { useCartContext } from "@/context/CartContext";
import OrderSummary from "@/components/Cart/OrderSummary";
import Link from "next/link";

const AddToCart = () => {
  const { cartProducts, cartTotalPrice } = useCartContext();
  console.log(cartProducts);


  return (
    <div className="flex flex-col gap-5 py-[2%] px-[14%] pb-10">
      <div className="text-2xl font-bold">Shopping Cart</div>
      <div className="gap-10">
        <div className="max-h-[400px] overflow-y-auto">
          {cartProducts.length > 0 ? (
            cartProducts.map((item, index) => (
              <CartProductCard product={item} key={index} />
            ))
          ) : (
            <div className="text-xl flex justify-center">No products added</div>
          )}
        </div>
        <div className="flex flex-col items-end md:w-full mt-10 md:mt-7">
          <OrderSummary cartTotalPrice={cartTotalPrice} />
          <div className="flex gap-7 px-2 mt-4">
            <Link href={'/'}>
              <button className="bg-primary/15 text-black hover:bg-primary hover:text-white px-3 py-3 font-bold rounded-sm">
                Continue Shopping
              </button>
            </Link>
            <Link href={'/checkout'}>
              <button className="bg-primary text-white hover:bg-primary/50 hover:text-black px-3 py-3 font-bold rounded-sm">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
