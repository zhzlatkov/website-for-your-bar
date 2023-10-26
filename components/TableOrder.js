import { useState } from "react";
import Loading from "./Loading";
import Toggle from "./Toggle";

export default function TableOrder({ order }) {
  const [error, setError] = useState({ status: false });
  const [isLoading, setIsLoading] = useState(false);
  const removeProductFromOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({ status: false });
    let url = `/api/remove-ordered-product`;
    let method = "PATCH";
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { orderId: order.id, productId: e.target.value },
      }),
    });

    const result = await response.json();
    if (response.status !== 200) {
      setIsLoading(false);
      setError({ status: true, message: result.message });
      console.error(result.message);
      return;
    }
    setIsLoading(false);
  };
  const updateOrder = async (value, action) => {
    setIsLoading(true);
    setError({ status: false });
    switch (action) {
      case "closeOrder":
        order.status = false;
        break;

      case "askForPrintedMenu":
        order.askForPrintedMenu = false;
        break;

      case "callTheStaff":
        order.callTheStaff = false;
        break;

      case "askForBill":
        order.askForBill = false;
        break;
    }
    let url = `/api/order`;
    let method = "PATCH";
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: { order },
      }),
    });

    const result = await response.json();
    if (response.status !== 200) {
      setIsLoading(false);
      setError({ status: true, message: result.message });
      console.error(result.message);
      return;
    }
    setIsLoading(false);
  };

  const updateАskForPrintedMenu = () => {
    updateOrder(false, "askForPrintedMenu");
  };
  const updateCallTheStaff = () => {
    updateOrder(false, "callTheStaff");
  };
  const updateАskForBill = () => {
    updateOrder(false, "askForBill");
  };
  const closeOrder = () => {
    updateOrder(false, "closeOrder");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="px-6">
        <h1 className="pb-2 text-xl text-center text-shark-200">Order:</h1>
        {order.askForPrintedMenu ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>Customers ask for a printed menu: </p>
            <Toggle
              state={order.askForPrintedMenu}
              handleStateChange={updateАskForPrintedMenu}
              blockEnabling={true}
            />
          </div>
        ) : null}
        {order.callTheStaff ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>customers ask for a waiter at their table: </p>
            <Toggle
              state={order.askForPrintedMenu}
              handleStateChange={updateCallTheStaff}
              blockEnabling={true}
            />
          </div>
        ) : null}
        {order ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>Customers ask for a waiter at their table: </p>
            <Toggle
              state={false}
              handleStateChange={updateАskForBill}
              blockEnabling={true}
            />
          </div>
        ) : null}
        {order.comment ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>
              <span>Customers comment about their order: </span>
              {order.comment}
            </p>
          </div>
        ) : null}
        {!error.status ? null : (
          <div className="pt-8 px-8 sm:flex sm:items-center sm:gap-4 justify-end">
            <label
              htmlFor="category-name"
              className="block text-sm font-medium text-red-600"
            >
              ERROR:
            </label>
            <div className="sm:col-span-2 text-red-600">
              <h1>{error.message || "Error"}</h1>
            </div>
          </div>
        )}
        {order.orderedProducts.map((orderedProduct) => (
          <>
            {/* orderedProduct.orderedProducts[0] */}
            <div
              key={orderedProduct.product.id}
              className="my-4 px-4 pb-4 border-b-2 border-shark-400 text-pirateGold-300 text-sm flex justify-around"
            >
              <h2
                key={orderedProduct.product.name}
                className="m-auto px-2 grow"
              >
                {orderedProduct.product.name}
              </h2>
              <h2
                key={orderedProduct.product.quantity}
                className="m-auto text-shark-400"
              >
                {orderedProduct.product.quantity}
              </h2>
              <h2
                key={orderedProduct.product.quantityType}
                className="m-auto px-2 text-shark-400"
              >
                {orderedProduct.product.quantityType}
              </h2>
              <h2 key={orderedProduct.product.price} className="m-auto">
                {orderedProduct.product.price}
              </h2>
              <button
                key={orderedProduct.id + "_" + "remove-ordered-roduct"}
                type="button"
                className="whitespace-nowrap max-h-8 m-auto ml-2 py-1 px-2 text-xs text-shark-200 border rounded-sm border-pirateGold-400 hover:text-pirateGold-400 hover:border-shark-400"
                onClick={removeProductFromOrder}
              >
                X
              </button>
            </div>
          </>
        ))}
        <button
          type="button"
          onClick={closeOrder}
          className={
            "w-5/12 text-center rounded-sm border border-transparent bg-pirateGold-600 mx-3 px-4 my-3 py-2 text-base font-medium text-pirateGold-100 shadow-sm hover:bg-pirateGold-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-pirateGold-50"
          }
        >
          Close Order
        </button>
      </div>
    </>
  );
}
