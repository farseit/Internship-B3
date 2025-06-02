"use client";
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [rows, setRows] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [errors, setErrors] = useState({}); 
  const handleEditorChange = (content) => {
    setProductDescription(content);
  };
  const Rowdata = {
    attributes: rows.reduce((acc, row) => {
      const type = row.type.toLowerCase(); // Convert type to lowercase for JSON keys
      acc[type] = row.value.reduce((values, item) => {
        values[item.name.toLowerCase()] = parseInt(item.quantity, 10); // Convert quantity to a number
        return values;
      }, {});
      return acc;
    }, {}),
  };

  return (
    <ProductContext.Provider
      value={{
        categoryId,
        setCategoryId,
        price,
        setPrice,
        errors,
        setErrors,
        quantity,
        setQuantity,
        Rowdata,
        rows,
        setRows,
        productName,
        setProductName,
        productDescription,
        setProductDescription,
        handleEditorChange,
        images,
        setImages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
