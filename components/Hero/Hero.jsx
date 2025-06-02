import React from "react";
import Categories from "./Categories";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import Carousel from "./Carousel";
import FeatureProducts from "../Product/FeatureProducts";

const Hero = () => {
  const banners = [
    { src: "/img/banner3.jpg", alt: "Banner1", text: "This is banner 1" },
    { src: "/img/banner1.jpg", alt: "Banner2", text: "This is banner 2" },
    { src: "/img/banner2.jpg", alt: "Banner3", text: "This is banner 3" },
    { src: "/img/banner3.jpg", alt: "Banner4", text: "This is banner 4" },
    { src: "/img/banner5.jpg", alt: "Banner5", text: "This is banner 5" },
    { src: "/img/banner3.jpg", alt: "Banner3", text: "This is banner 3" },
    { src: "/img/banner1.jpg", alt: "Banner1", text: "This is banner 1" },
    { src: "/img/banner3.jpg", alt: "Banner2", text: "This is banner 2" },
  ];

  return (
    <section className="lg:mx-[10rem] md:py-4 flex flex-col gap-5">
      <div className="flex gap-3">
        <Categories />
        <div className="flex flex-col gap-2 overflow-hidden bg-transparent w-full">
          {/* Carousel Component */}
          <Carousel banners={banners} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
