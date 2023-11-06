import { useState } from "react";
import Loading from "./Loading";
import Toggle from "./Toggle";

export default function TableOrder({ order }) {
  const [error, setError] = useState({ status: false });
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState(order);
  const removeProductFromOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({ status: false });
    let url = `/api/order`;
    let method = "PATCH";
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          orderId: orderData.id,
          productId: e.target.value,
          userEmail: "zlatko@zlatko.com",
        },
      }),
    });

    const result = await response.json();
    if (response.status !== 200) {
      setIsLoading(false);
      setError({ status: true, message: result.message });
      console.error(result.message);
      return;
    }
    setOrderData(result.order);
    setIsLoading(false);
  };
  const updateOrder = async (value, action) => {
    setIsLoading(true);
    setError({ status: false });
    let data = { orderId: orderData.id };
    switch (action) {
      case "closeOrder":
        data.isClosed = true;
        break;

      case "askForPrintedMenu":
        data.askForPrintedMenu = false;
        break;

      case "callTheStaff":
        data.callTheStaff = false;
        break;

      case "askForBill":
        data.askForBill = false;
        break;
    }

    let url = `/api/order`;
    let method = "PATCH";
    data.userEmail = "zlatko@zlatko.com";
    data.orderId = orderData.id;
    const response = await fetch(url, {
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
      setError({ status: true, message: result.message });
      console.error(result.message);
      return;
    }
    setOrderData(result.order);
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

  if (orderData.isClosed) {
    return;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="px-6">
        <h1 className="pb-2 text-xl text-center text-shark-200">
          Order {orderData.id}:
        </h1>
        {orderData.askForPrintedMenu ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>Customers ask for a printed menu: </p>
            <Toggle
              state={orderData.askForPrintedMenu}
              handleStateChange={updateАskForPrintedMenu}
              blockEnabling={true}
            />
          </div>
        ) : null}
        {orderData.callTheStaff ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>customers ask for a waiter at their table: </p>
            <Toggle
              state={orderData.callTheStaff}
              handleStateChange={updateCallTheStaff}
              blockEnabling={true}
            />
          </div>
        ) : null}
        {orderData.askForBill ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>Customers ask for the bill: </p>
            <Toggle
              state={orderData.askForBill}
              handleStateChange={updateАskForBill}
              blockEnabling={true}
            />
          </div>
        ) : null}
        {orderData.comment ? (
          <div className="py-4 px-3 text-pirateGold-800 border-y-2 border-shark-500 text-lg flex justify-between">
            <p>
              <span>Customers comment about their order: </span>
              {orderData.comment}
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
        {orderData.orderedProducts.map((orderedProduct) => (
          <div key={orderedProduct.id}>
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
                {orderedProduct.product.price.toFixed(2)}
              </h2>
              <button
                key={orderedProduct.id + "_" + "remove-ordered-roduct"}
                value={orderedProduct.id}
                type="button"
                className="whitespace-nowrap max-h-8 m-auto ml-2 py-1 px-2 text-xs text-shark-200 border rounded-sm border-pirateGold-400 hover:text-pirateGold-400 hover:border-shark-400"
                onClick={removeProductFromOrder}
              >
                X
              </button>
            </div>
          </div>
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
