import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "@/context/CartContext";

const CartProductCard = ({ product }) => {
  const { removeFromCartClick, increaseQuantity, decreaseQuantity } =
    useCartContext();
  console.log(product);

  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-1 p-2 gap-2 text-lg">
        <div className="flex items-center gap-3">
          <Image
            src={product.image[0]}
            alt={product.name}
            width={1080}
            height={1080}
            className="w-16 h-16 rounded-lg p-1 bg-slate-400/30"
          />
          <span className="">{product.name}</span>
        </div>
        {/* <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span>Model:dummy</span>
            <span className="text-primary text-sm">L,Green</span>
          </div>
        </div> */}
        <div className="flex md:justify-center justify-end items-center">
          <button
            onClick={() => decreaseQuantity(product.Id)}
            className="px-1 border rounded-lg bg-slate-400/30 hover:bg-slate-400 active:bg-slate-500 active:scale-95 transition-transform duration-150"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="px-4 font-bold">{product.quantity}</span>
          <button
            onClick={() => increaseQuantity(product.Id)}
            className="px-1 border rounded-lg bg-slate-400/30 hover:bg-slate-400 active:bg-slate-500 active:scale-95 transition-transform duration-150"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="flex md:justify-center justify-end items-center">
          {product.totalPrice}$
        </div>
        <div className="flex justify-end items-center">
          <button
            className="p-2 rounded-full transition-all duration-150 hover:text-red-500 active:scale-90"
            onClick={() => removeFromCartClick(product.Id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartProductCard;
