"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import axios from "axios";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaAward } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
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
    <div className="flex gap-4 lg:mx-[10rem] mx-[2rem] mt-5 mb-5">
      {/* <div className="lg:mx-[10rem] mx-[2rem]  mt-5 ">
        <h3 className=" text-secondary text-center mb-5 uppercase text-3xl font-bold font-oswald ">
          New Arrival
        </h3>
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
      </div> */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="flex gap-1 text-secondary text-center uppercase text-3xl font-bold font-oswald"> <span className="text-[#fb9348]"><FaAward />
          </span>Best Sellings</h1>
          <button className="text-primary text-xl font-semibold flex items-center gap-1
          ">View All <span className="text-xl"><MdOutlineKeyboardArrowRight />
            </span></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.slice(0, 6).map((product, index) => (


            <ProductCard product={product} key={index} />


          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="flex gap-1 text-secondary text-center uppercase text-3xl font-bold font-oswald"> <span><FaAward />
          </span>Top Rated</h1>
          <button className="text-primary text-xl font-semibold flex items-center gap-1
          ">View All <span className="text-xl"><MdOutlineKeyboardArrowRight />
            </span></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.slice(0, 6).map((product) => (
            <>
              <ProductCard product={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductContainer;
