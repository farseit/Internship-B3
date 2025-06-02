"use client";
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Function to add a product to the cart
  const addToCartClick = (product) => {
    setCartProducts((prevCartProducts) => {
      const productIndex = prevCartProducts.findIndex(
        (item) => item.Id === product.Id
      );

      if (productIndex >= 0) {
        // Update quantity and totalPrice if product exists in the cart
        const updatedCart = [...prevCartProducts];
        const existingProduct = updatedCart[productIndex];
        updatedCart[productIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
          totalPrice:
            existingProduct.price * (existingProduct.quantity + 1), // Update totalPrice
        };
        return updatedCart;
      } else {
        // Add new product to the cart with initial quantity and totalPrice
        return [
          ...prevCartProducts,
          {
            ...product,
            quantity: 1,
            totalPrice: product.price * 1, // Initial totalPrice
          },
        ];
      }
    });
  };

  // Increase the quantity of a product
  const increaseQuantity = (productId) => {
    setCartProducts((prevCart) =>
      prevCart.map((item) =>
        item.Id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1), // Use updated quantity
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartProducts(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.Id === productId
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: item.price * (item.quantity - 1), // Update totalPrice
                }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove products with quantity 0
    );
  };

  // Function to remove a product from the cart
  const removeFromCartClick = (productId) => {
    setCartProducts((prevCartProducts) =>
      prevCartProducts.filter((item) => item.id !== productId)
    );
  };

  // Total price for all products in the cart
  const cartTotalPrice = cartProducts.reduce(
    (total, product) => total + Number(product.totalPrice),
    0
  );

  const cartCount = cartProducts.length;

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCartClick,
        removeFromCartClick,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for Context
export const useCartContext = () => useContext(CartContext);
