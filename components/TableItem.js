import Link from "next/link";
import Toggle from "./Toggle";
import { useState } from "react";
import Loading from "./Loading";
import TableOrder from "./TableOrder";

export default function TableItem({ table }) {
  const [error, setError] = useState({ status: false });
  const [isLoading, setIsLoading] = useState(false);
  const updateTableStatus = async (tableStatus) => {
    setIsLoading(true);
    setError({ status: false });
    let url = `/api/table`;
    let method = "PATCH";
    table.status = tableStatus;
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: table,
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

  return (
    <div className="m-4 border-2 border-shark-500 rounded-sm">
      {isLoading ? (
        <div className="w-96">
          <Loading />
        </div>
      ) : (
        <>
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
          <div className="my-4 px-8 py-4 border-b-2 border-shark-400 text-pirateGold-300 text-sm uppercase flex justify-around divide-x divide-shark-200">
            <p className="my-auto pr-2">ID: {table.id}</p>
            <p className="my-auto px-2">Name: {table.name}</p>
            <p className="my-auto px-2">Seats: {table.seats}</p>
            <Link
              className="my-auto px-2 ring-offset-pirateGold-400 ring-pirateGold-400"
              href={table.url}
            >
              URL
            </Link>
            <p className="my-auto px-2">Status: </p>
            <Toggle
              state={table.status}
              handleStateChange={updateTableStatus}
            ></Toggle>
          </div>
          {table.orders.length ? <TableOrder order={table.orders[0]} /> : null}
        </>
      )}
    </div>
  );
}
