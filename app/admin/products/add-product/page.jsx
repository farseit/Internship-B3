"use client";
import Image from "next/image";
import GeneralInfo from "@/components/Admin/Products/AddProduct/GeneralInfo/GeneralInfo";
import UploadImage from "@/components/Admin/Products/AddProduct/UploadImage";
import PricingAndStock from "@/components/Admin/Products/AddProduct/PricingAndStock";
import CategorySelector from "@/components/Admin/Products/AddProduct/GeneralInfo/CategorySelector";
import { useProductContext } from "@/context/admin/ProductContext";
import axios from "axios";
import { Alert } from "antd";
import { useState, useEffect } from "react";

const AddProduct = () => {
  const {
    productName,
    productDescription,
    images,
    Rowdata,
    price,
    quantity,
    categoryId,
    setErrors,
  } = useProductContext();
  // Alert state
  const [visible, setVisible] = useState(false);
  // Alert close function
  const handleClose = () => {
    setVisible(false);
  };
  //auto close alert
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000); // 2 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [visible]);
  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!productName) newErrors.productName = "Product name is required.";
    if (!productDescription)
      newErrors.productDescription = "Product description is required.";
    if (price <= 0) newErrors.price = "Price must be greater than 0.";
    if (quantity <= 0) newErrors.quantity = "Quantity must be greater than 0.";
    if (!categoryId) newErrors.category = "Category is required.";
    // if (Rowdata.attributes.length === 0)
    //   newErrors.attributes = "Attributes are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleAddProduct = async () => {
    if (validateForm()) {
      try {
        const form = new FormData();

        // Append values
        form.append("name", productName);
        form.append("desc", productDescription);
        form.append("price", price);
        form.append("date", new Date().toISOString());
        form.append("json_atribute", JSON.parse(Rowdata));
        form.append("categoryId", categoryId);
        images.forEach((image) => {
          form.append("ProductPicture", image.file);
        });
        form.append("quantity", quantity);
        for (const [key, value] of form.entries()) {
          console.log(`${key}: ${value}`);
        }
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Product/add`,
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Product added successfully:", response.data);
        setVisible(true);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      console.error("Form validation failed.");
    }
  };

  return (
    <>
      {/* Alert */}
      {visible && (
        <Alert
          message="Alert Message Text"
          type="info"
          closable
          afterClose={handleClose}
        />
      )}
      <div className="flex flex-col items-center gap-3 px-[2%] pt-[1%]">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/admin/icon/main/inventory.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[28px] h-[28px]"
            />
            <p className="md:text-xl text-lg font-bold">Add New Product</p>
          </div>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-primary rounded-full px-4 py-2"
          >
            <Image
              src="/admin/icon/main/check.svg"
              alt="alt"
              width={1080}
              height={1080}
              className="w-[22px] h-[16px]"
            />
            <p className="font-semibold md:text-base text-sm text-white">
              Save Product
            </p>
          </button>
        </div>
        <div className="lg:flex lg:flex-row flex flex-col lg:justify-between gap-4 w-full">
          <GeneralInfo />
          <UploadImage />
        </div>
        <div className="lg:flex lg:flex-row flex flex-col lg:justify-between gap-4 w-full">
          <PricingAndStock />
          <CategorySelector />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
