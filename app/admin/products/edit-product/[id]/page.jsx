"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const EditProduct = ({ params }) => {
  const [product, setProduct] = useState([]);
  const id = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/search/${id}`
        );
        setProduct(response.data);
        console.log("Product fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, []);

  return <div>My Post: {product.name}</div>;
};

export default EditProduct;
