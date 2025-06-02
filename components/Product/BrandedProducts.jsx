"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import axios from "axios";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BrandedProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const type = [
    "All",
    "Xioami",
    "Samsung",
    "Apple",
    "OnePlus",
    "Realme",
    "Oppo",
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/search`
        );
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className=" lg:mx-[10rem] mx-[2rem] mt-5">
        <h3 className=" text-secondary text-center mb-5 uppercase text-3xl font-bold font-oswald ">
          Top Brand Products
        </h3>
        <div className="flex justify-start lg:justify-center gap-4 lg:gap-10 mb-8 p-4 overflow-x-auto">
          {type.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)} // Update selected button
              className={`relative text-base md:text-lg lg:text-xl font-semibold whitespace-nowrap ${selectedIndex === index
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
                }`}
            >
              {item}
              {/* Underline */}
              <span
                className={`absolute bottom-[-2px] left-0 h-[2px] w-full bg-primary transition-transform duration-300 ${selectedIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
              ></span>
            </button>
          ))}
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 25000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full !pb-10 "
        >
          {products.map((product) => (
            <>
              <SwiperSlide>
                <ProductCard product={product} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default BrandedProducts;
