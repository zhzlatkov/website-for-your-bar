"use client";

import ProductRemovingButton from "./ProductRemovingButton";
import OrderingButton from "./OrderingButton";
import { useOrderContext } from "@/context/OrderContext.js";
import Link from "next/link";

export default function ShoppingCart({ order }) {
  const { orderedProducts, productsInCart } = useOrderContext();
  const subtotal =
    order?.orderedProducts?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0) ||
    0 +
      productsInCart?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0) ||
    0;
  return (
    <div className="bg-shark-950 w-11/12 mx-auto max-w-2xl flex-column justify-between lg:max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-0">
      <h1 className="text-center text-3xl font-bold tracking-tight text-pirateGold-500 sm:text-4xl">
        Order
      </h1>
      {orderedProducts.length > 0 ? (
        <section aria-labelledby="ordered-products" className="mt-8">
          <h2
            id="ordered-products"
            className="capitalize text-xl text-center grow font-semibold text-pirateGold-200"
          >
            Your ordered products
          </h2>

          <ul
            role="list"
            className="divide-y divide-pirateGold-500/10 border-b border-t border-pirateGold-500/10"
          >
            {orderedProducts.map((product, index) => (
              <Link
                href={`/products/${product.name}`}
                key={`${index}-${product.id}-${product.name}`}
                className="flex py-2"
              >
                <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="capitalize grow font-semibold text-pirateGold-400">
                        {product.name}
                      </h4>
                      <p className="capitalize text-center whitespace-nowrap mx-4 font-light text-shark-200">
                        {product.quantity} {product.quantityType}
                      </p>
                      <p className="ml-4 font-medium text-pirateGold-400">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </section>
      ) : (
        ""
      )}
      {productsInCart.length > 0 ? (
        <section aria-labelledby="products-in-cart" className="mt-8">
          <h2
            id="products-in-cart"
            className="capitalize text-xl text-center grow font-semibold text-pirateGold-200"
          >
            Your products added in the cart
          </h2>

          <ul
            role="list"
            className="divide-y divide-pirateGold-500/10 border-b border-t border-pirateGold-500/10"
          >
            {productsInCart.map((product, index) => {
              return (
                <div
                  href={`/products/${product.name}`}
                  key={`${index}-${product.id}-${product.name}-cart`}
                  className="flex py-2"
                >
                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="m-auto capitalize grow font-semibold text-pirateGold-400">
                          {product.name}
                        </h4>
                        <p className="m-auto capitalize text-center whitespace-nowrap mx-4 font-light text-shark-200">
                          {product.quantity} {product.quantityType}
                        </p>
                        <p className="m-auto ml-4 font-medium text-pirateGold-400">
                          ${product.price.toFixed(2)}
                        </p>
                        <ProductRemovingButton index={index} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </section>
      ) : (
        ""
      )}

      <section aria-labelledby="summary-heading" className="text-center">
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>

        <div className="my-6">
          <div className="flex items-center justify-between sm:justify-around">
            <h2 className="text-lg font-medium text-pirateGold-400">
              Subtotal
            </h2>
            <dd className="ml-4 text-lg font-medium text-pirateGold-400">
              ${subtotal.toFixed(2)}
            </dd>
          </div>

          <p className="my-2 text-sm text-pirateGold-200">
            This is your subtotal bill, without included tips. If you&apos;d
            like to express your appreciation for the service, you are more than
            welcome to leave a gratuity.
          </p>
        </div>
        <OrderingButton isAlreadyOrderedProducts={orderedProducts.length} />
      </section>
    </div>
  );
}
