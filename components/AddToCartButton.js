import { useOrderContext } from "@/context/OrderContext.js";

export default function AddToCartButton({ product }) {
  const { allowedOrder, updateProductInCart } = useOrderContext();
  const orderProduct = (e) => {
    e.preventDefault();
    return updateProductInCart(product);
  };
  return (
    <button
      key={"order" + "_" + product.name}
      type="button"
      className={
        "whitespace-nowrap hover:transition-shadow hover:shadow-md hover:shadow-pirateGold-700/50 focus:transition-shadow focus:shadow-md focus:shadow-pirateGold-700/50 max-h-8 m-auto ml-2 px-2 py-1 text-sm text-pirateGold-300 uppercase border-2 rounded-sm border-pirateGold-400 hover:text-pirateGold-600 hover:border-pirateGold-600 focus:text-pirateGold-600 focus:border-pirateGold-600 " +
        (!allowedOrder ? "" : "hidden")
      }
      onClick={orderProduct}
    >
      Order
    </button>
  );
}
