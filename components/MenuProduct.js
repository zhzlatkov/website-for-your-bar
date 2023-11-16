import Link from "next/link";
import Image from "./Image";
import AddToCartButton from "./AddToCartButton.js";

export default function MenuProducts({ product }) {
  return (
    <article
      key={product.id}
      className="relative my-6 mx-4 md:mx-6 items-center"
    >
      <div className="flex">
        <Link
          href={`/products/${product.name}`}
          className="group grow flex items-center justify-between cursor-pointer"
        >
          <div className="h-10 w-10">
            <Image
              classNameRoot="h-10 w-10"
              classNameImage="object-cover rounded-xl"
              src={product.image}
              alt="Image"
            />
          </div>
          <div className="grow ml-4">
            <h1 className="capitalize text-pirateGold-400 font-semibold">
              {product.name}
            </h1>
            <span className="text-sm text-shark-200 z-10 hidden sm:block">
              {product.shortDescription}
            </span>
          </div>
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
    </article>
  );
}
