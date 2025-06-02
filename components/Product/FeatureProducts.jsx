"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import axios from "axios";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const FeatureProducts = () => {
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
  console.log(products);

  return (
    <>
      <div className=" lg:mx-[10rem] mx-[2rem] mt-5">
        <h3
          className="text-3xl font-bold font-oswald mb-5"
          style={{
            background: "linear-gradient(to right, #032970, #fffbfb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          New Arrivals
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
      </div>
    </>
  );
};
export default FeatureProducts;
