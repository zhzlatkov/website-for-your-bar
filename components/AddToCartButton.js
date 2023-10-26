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
        "whitespace-nowrap max-h-8 m-auto ml-2 px-2 py-1 text-sm text-shark-200 uppercase border-2 rounded-sm border-pirateGold-400 hover:text-pirateGold-400 hover:border-shark-400 " +
        (allowedOrder ? "" : "hidden")
      }
      onClick={orderProduct}
    >
      Order
    </button>
  );
}
