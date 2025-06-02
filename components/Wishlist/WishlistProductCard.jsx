'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useWishlistContext } from "@/context/WishlistContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useCartContext } from "@/context/CartContext";

const WishlistProductCard = ({ product }) => {
  const { wishlist, handleWishlistClick } = useWishlistContext();
  const isInWishlist = wishlist.some((item) => item.Id === product.Id);
  

  const { cartProducts, addToCartClick } = useCartContext();

  return (
    <div className="relative flex flex-col justify-between h-full overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg group">
      <div className="absolute top-0 left-0 z-40 w-16 h-16">
        <div className="absolute transform -rotate-45 bg-[#192a56] text-center text-white font-semibold py-1 left-[-55px] top-[20px] w-[170px] text-xs">
          10 % OFF
        </div>
      </div>
      <button
        className=" absolute top-2 right-3 z-40 text-2xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 scale-125"
        onClick={() => handleWishlistClick(product)}
      >
        {/* Font Awesome Heart Icon */}
        <FontAwesomeIcon
          icon={isInWishlist ? solidHeart : regularHeart}
          className={`text-2xl ${isInWishlist ? "text-red-500" : "text-gray-500"
            }`}
        />
      </button>
      <div className="z-30">
        <Link href={`/product-info/${product.Id}`} key={product.Id}>
          <div className="overflow-hidden">
            <Image
              src={product.image[0]}
              alt={product.name}
              width={300}
              height={200}
              className="object-cover w-full aspect-[4/5] group-hover:scale-105 transition-all duration-300 "
            />
          </div>
        </Link>
        <div className="p-2 space-y-1.5 overflow-hidden">
          <h2 className="leading-tight text-center capitalize truncate text-lg font-oswald">
            {product.name}
          </h2>
          <div className="flex justify-center gap-1 flex-nowrap md:gap-3">
            <p className="flex justify-center gap-1 text-xs text-red-500 line-through flex-nowrap font-lato md:text-base">
              <span className="mr-0.5">৳</span>
              {new Intl.NumberFormat().format(product.price)}
            </p>
            <p className="flex justify-center gap-1 text-xs flex-nowrap font-lato md:text-base">
              <span className="mr-0.5">৳</span>
              {new Intl.NumberFormat().format(product.price)}
            </p>
          </div>
          <div className="flex justify-center gap-1.5">
            <button className="rounded-md bg-[#192a56]/90 hover:bg-[#192a56] px-1 py-1 basis-1/2 text-[10px] capitalize text-white md:px-2 md:text-xs">
              Buy Now
            </button>
            <button
              className={`rounded-md px-1 py-1 basis-1/2 text-[10px] capitalize md:px-2 md:text-xs ${cartProducts &&
                  cartProducts.length > 0 &&
                  cartProducts.some((item) => item.Id === product.Id)
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "border border-[#192a16] text-[#192a56] hover:bg-[#192a56]/90 hover:text-white"
                }`}
              onClick={() => {
                if (
                  cartProducts &&
                  !cartProducts.some((item) => item.Id === product.Id)
                ) {
                  addToCartClick(product);
                }
              }}
              disabled={
                cartProducts &&
                cartProducts.some((item) => item.Id === product.Id)
              }
            >
              {cartProducts &&
                cartProducts.some((item) => item.Id === product.Id)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;
