import { useOrderContext } from "@/context/OrderContext.js";

export default function ProductRemovingButton({ index }) {
  const { removeProductFromCart } = useOrderContext();
  const removeProduct = (e) => {
    e.preventDefault();
    return removeProductFromCart(index);
  };
  return (
    <button
      key={index + "_" + "remove-from-cart-button"}
      type="button"
      className="whitespace-nowrap max-h-8 m-auto ml-2 py-1 px-2 text-xs text-shark-200 border rounded-sm border-pirateGold-400 hover:text-pirateGold-400 hover:border-shark-400"
      onClick={removeProduct}
    >
      X
    </button>
  );
}
