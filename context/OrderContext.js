"use client";

import { createContext, useContext, useState } from "react";
import normalizeOrderedProduct from "@/normalizers/normalizeOrderedProduct";

const OrderContext = createContext(null);
export const useOrderContext = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [allowedOrder, setAllowedOrder] = useState(false);
  const [orderingCode, setOrderingCode] = useState(undefined);
  const [flashMessages, setFlashMessages] = useState({
    status: false,
    color: "",
    message: "",
  });
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

  const updateFlashMessages = (newValue) => {
    setFlashMessages(newValue);
  };

  const updateAllowedOrder = (newValue) => {
    setAllowedOrder(newValue);
  };

  const updateOrderingCode = (newValue) => {
    setOrderingCode(newValue);
  };

  const updateOrderedProducts = (newValue, isFromCart = false) => {
    let normalizedProducts = newValue.map((product) =>
      normalizeOrderedProduct(product)
    );
    if (!isFromCart) {
      setOrderedProducts(normalizedProducts);
      return;
    }
    const updatedOrderedProducts = [...orderedProducts, ...normalizedProducts];
    setOrderedProducts(updatedOrderedProducts);
  };

  const updateProductInCart = (newValue) => {
    const normalizedProduct = normalizeOrderedProduct(newValue);
    updateFlashMessages({
      status: true,
      color: "green",
      message: "Successfully added product to cart",
    });
    return setProductsInCart([normalizedProduct, ...productsInCart]);
  };

  const removeProductFromCart = (index) => {
    const updatedProductsInCart = [
      ...productsInCart.slice(0, index),
      ...productsInCart.slice(index + 1, productsInCart.length),
    ];
    updateFlashMessages({
      status: true,
      color: "green",
      message: "Successfully removed product from cart",
    });
    setProductsInCart(updatedProductsInCart);
  };

  const removeAllProductsFromCart = () => {
    updateFlashMessages({
      status: true,
      color: "green",
      message: "Successfully removed all products from cart",
    });
    setProductsInCart([]);
  };

  return (
    <OrderContext.Provider
      value={{
        allowedOrder,
        orderingCode,
        orderedProducts,
        productsInCart,
        flashMessages,
        updateAllowedOrder,
        updateOrderingCode,
        updateProductInCart,
        updateFlashMessages,
        updateOrderedProducts,
        removeProductFromCart,
        removeAllProductsFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
