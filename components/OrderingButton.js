import { useOrderContext } from "@/context/OrderContext.js";
import { useState } from "react";
import Spinner from "./Spinner";
import Loading from "./Loading";

export default function OrderingButton({ isAlreadyOrderedProducts }) {
  const {
    productsInCart,
    updateOrderedProducts,
    updateAllowedOrder,
    removeAllProductsFromCart,
  } = useOrderContext();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ error: false, text: "" });

  const orderProducts = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ error: false, text: "" });
    const method = isAlreadyOrderedProducts ? "PATCH" : "POST";
    const data = { productsInCart };
    (async function () {
      const response = await fetch("api/order", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });
      const result = await response.json();
      if (response.status !== 200) {
        setIsLoading(false);
        setMessage({
          error: true,
          text: "There was an error please contact the staff.",
        });
        console.error(result.message);
        updateAllowedOrder(false);
        return;
      }
      setIsLoading(false);
      setMessage({ error: false, text: "Successful order" });
      updateOrderedProducts(productsInCart, true);
      removeAllProductsFromCart();
    })();
  };
  if (isLoading) return <Loading />;

  return (
    <>
      <button
        type="button"
        onClick={orderProducts}
        className={
          "w-5/12 rounded-sm border border-transparent bg-pirateGold-600 mx-3 px-4 my-3 py-2 text-base font-medium text-pirateGold-100 shadow-sm hover:bg-pirateGold-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-pirateGold-50"
        }
      >
        Order
      </button>
      <p className={message.error ? "text-red-600" : "text-green-600"}>
        {message.text ?? " ."}
      </p>
    </>
  );
}
