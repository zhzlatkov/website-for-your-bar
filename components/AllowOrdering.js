import IntegerFied from "./IntegerField";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Loading from "./Loading";
import { useState } from "react";
import { useOrderContext } from "@/context/OrderContext.js";

export default function AllowOrdering() {
  const { allowedOrder, orderingCode, updateAllowedOrder, updateOrderingCode } =
    useOrderContext();

  const [code, setCode] = useState(orderingCode);
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeCopied, setIsCodeCopied] = useState(false);
  const [error, setError] = useState({ status: false });
  const [isVisible, setIsVisible] = useState(allowedOrder);

  const onClose = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  const onCopyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    setIsCodeCopied(true);
  };

  const onChange = (e) => {
    e.preventDefault();
    setCode(e.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = fetch("/api/allow-ordering", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    });
    const result = await response.json();
    if (response.status !== 200) {
      setIsLoading(false);
      setError({ status: true, message: result.message });
      console.error(result.message);
    } else {
      setIsLoading(false);
      updateAllowedOrder(true);
      updateOrderingCode(code);
    }
  };
  if (isLoading) {
    return <Loading className="w-full h-max opacity-25" />;
  }

  return (
    <div className={"bg-pirateGold-100 " + (isVisible ? "" : "hidden")}>
      <div className="relative max-w-6xl m-auto isolate flex items-center overflow-hidden px-4 py-1 lg:py-2 lg:px-3.5">
        <div className="lg:pr-12 m-auto flex grow justify-around lg:justify-end items-center self-end">
          {orderingCode ? (
            <p className="text-base sm:text-lg lg:text-base text-shark-800">
              Your table code is:
            </p>
          ) : (
            <p className="my-1 text-xs sm:text-base lg:text-xs text-shark-800">
              Enter your <br className="sm:hidden lg:block"></br> table code
              here:
            </p>
          )}
          {orderingCode ? (
            <>
              <h2 className="text-2xl font-bold lg:text-xl md:px-4 text-pirateGold-700">
                {orderingCode}
              </h2>
              <button
                onClick={onCopyToClipboard}
                className={
                  "h-8 px-2 box-content border-2 rounded-sm text-pirateGold-200 " +
                  (!isCodeCopied
                    ? "border-pirateGold-100 text-pirateGold-200 bg-shark-950 focus:text-pirateGold-300 focus:bg-shark-700"
                    : "border-lime-500 text-lime-500 bg-pirateGold-200 focus:text-lime-600")
                }
              >
                {!isCodeCopied ? "Copy the code" : "Code is copied"}
              </button>
            </>
          ) : (
            <div className="flex items-center">
              {!error.status ? null : <h2>{error.message || ""}</h2>}
              <form
                onSubmit={onSubmit}
                className="mx-2 lg:mx-4 grow-1 flex justify-between items-center"
                style={{ textAlignLast: "center" }}
              >
                <IntegerFied
                  formName="AllowOrdering"
                  fieldName="AllowOrdering"
                  onChange={onChange}
                  hideLabel={true}
                />
              </form>
              <button
                type="submit"
                className="mt-1 sm:mt-0 border-2 lg:border-1 border-pirateGold-100 rounded-sm px-2 h-8 lg:6 bg-shark-950 text-pirateGold-200 focus:bg-shark-700 focus:text-pirateGold-300"
              >
                Submit
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          className="w-11 max-w-6xl mt-1 lg:mt-0"
          onClick={onClose}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon
            className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
