import { createContext, useContext, useState } from "react";
import normalizeOrderedProduct from "@/normalizers/normalizeOrderedProduct";

const OrderContext = createContext(null);
export const useOrderContext = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [allowedOrder, setAllowedOrder] = useState(false);
  const [orderingCode, setOrderingCode] = useState(undefined);
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);

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
    return setProductsInCart([normalizedProduct, ...productsInCart]);
  };

  const ProductRemovingFromCart = (value) => {
    const index = productsInCart.findIndex((product) => product.id === value);
    const updatedProductsInCart = [
      ...productsInCart.slice(0, index),
      ...productsInCart.slice(index + 1),
    ];
    setProductsInCart(updatedProductsInCart);
  };

  const removeAllProductsFromCart = () => {
    setProductsInCart([]);
  };

  return (
    <OrderContext.Provider
      value={{
        allowedOrder,
        orderingCode,
        orderedProducts,
        productsInCart,
        updateAllowedOrder,
        updateOrderingCode,
        updateOrderedProducts,
        updateProductInCart,
        ProductRemovingFromCart,
        removeAllProductsFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
