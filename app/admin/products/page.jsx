'use client'
import React from "react";
import Link from "next/link";
import axios from "axios";
import ProductsTable from "@/components/Admin/Products/ProductsTable";
import { useEffect, useState } from "react";

const Products = () => {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT +"/Product/search");
        setProducts(response.data);
        console.log("Products fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <div className="flex flex-col items-center gap-5 px-[2%] pt-[1%]">
      <div className="w-full flex justify-end">
        <Link
          href={"/admin/products/add-product"}
          className="p-3 px-6 bg-primary rounded-md text-white font-bold"
        >
          Add Product
        </Link>
      </div>
      <ProductsTable products={products}  />
    </div>
  );
};

export default Products;
