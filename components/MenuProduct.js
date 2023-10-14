import Link from "next/link";
import Image from "./Image";
import AddToCartButton from "./AddToCartButton.js";

export default function MenuProducts({ product }) {
  return (
    <section
      key={product.id}
      className="relative my-6 mx-4 md:mx-6 items-center"
    >
      <div className="flex">
        <Link
          href={`/products/${product.name}`}
          className="group grow flex items-center justify-between cursor-pointer"
        >
          <div
            className="p-2 text-sm text-pirateGold-500 border-pirateGold-100 rounded-lg shadow-sm w-full
                transition transform z-10 inline-block translate-y-8 ease-in-out invisible group-hover:visible group-hover:translate-y-0 absolute -top-20
                text-white"
          >
            <div className="bg-pirateGold-500 rounded-sm p-2 flex justify-around z-10">
              <Image
                classNameRoot="w-12 h-12"
                classNameImage="rounded-lg"
                src={product.image}
                alt="Flowbite logo"
              />
              <span className="mb-1 ml-4 text-sm leading-none text-pirateGold-100 wrap grow z-10">
                {product.shortDescription}
              </span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="triangle w-8 h-8 bg-pirateGold-500 transform rotate-45 -translate-x-1/2"></div>
            </div>
          </div>

          <h1 className="capitalize text-pirateGold-400 grow font-semibold">
            {product.name}
          </h1>
          <h1 className="text-shark-200 whitespace-nowrap mx-4 text-end font-light">
            {product.quantity} {product.quantityType}.
          </h1>
          <h1 className="text-yellow-400 w-20 mr-2 whitespace-nowrap text-end font-semibold">
            {product.price.toFixed(2)} лв.
          </h1>
        </Link>
        <AddToCartButton product={product} />
      </div>

      <div className=""></div>
    </section>
  );
}
