"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ButtonSidebar = () => {
  const [selected, setSelected] = useState();
  return (
    <div className="flex flex-col gap-8">
      {sideBarIcon.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          onClick={() => setSelected(index)}
          className={`flex gap-8 ${
            selected == index ? "text-white" : "text-gray-600"
          }`}
        >
          <Image
            src={item.src}
            alt="alt"
            width={1080}
            height={1080}
            className="w-[23px] h-[26px]"
            style={{
              filter:
                selected === index
                  ? "invert(100%) sepia(100%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)"
                  : "invert(100%) grayscale(100%) brightness(70%) contrast(60%)",
            }}
          />
          <span className="text-xl">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default ButtonSidebar;
const sideBarIcon = [
  {
    name: "Dashboard",
    src: "/admin/icon/sidebar/dashboard.svg",
    link: "../../admin/dashboard",
  },
  {
    name: "Products",
    src: "/admin/icon/sidebar/inventory_2.svg",
    link: "../../admin/products",
  },
  {
    name: "Category",
    src: "/admin/icon/sidebar/category.svg",
    link: "../../admin/category",
  },
  {
    name: "Customers",
    src: "/admin/icon/sidebar/contacts_product.svg",
    link: "../../admin/customers",
  },
  {
    name: "Orders",
    src: "/admin/icon/sidebar/draft_orders.svg",
    link: "../../admin/orders",
  },
  {
    name: "Our Staff",
    src: "/admin/icon/sidebar/person.svg",
    link: "#",
  },
  {
    name: "Settings",
    src: "/admin/icon/sidebar/settings.svg",
    link: "#",
  },
];
