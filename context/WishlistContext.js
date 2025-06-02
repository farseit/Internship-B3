"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add or remove product from wishlist
  const handleWishlistClick = (product) => {
    setWishlist((prevWishlist) => {
      console.log("Data:", prevWishlist);
      const productIndex = prevWishlist.findIndex(
        (item) => item.Id === product.Id
      );
      console.log("Index", productIndex);
      if (productIndex >= 0) {
        // Remove product
        const updatedWishlist = [...prevWishlist];
        updatedWishlist.splice(productIndex, 1);
        return updatedWishlist;
      } else {
        // Add product
        return [...prevWishlist, product];
      }
    });
  };

  const listCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{ handleWishlistClick, wishlist, setWishlist, listCount }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook for Context
export const useWishlistContext = () => useContext(WishlistContext);
