import Link from "next/link";
import Image from "./Image";
import AddToCartButton from "./AddToCartButton.js";

export default function MenuProducts({ product }) {
  return (
    <article
      key={product.id}
      className="animate-slideDown relative my-6 sm:mx-4 md:mx-6 items-center"
    >
      <div className="flex">
        <Link
          href={`/products/${product.name}`}
          className="group grow flex items-center justify-between cursor-pointer"
        >
          <div className="hidden h-10 w-10 xs:block">
            <Image
              classNameRoot="h-10 w-10 overflow-hidden rounded-xl"
              classNameImage="object-cover rounded-xl"
              height={0}
              width={40}
              fill={false}
              src={product.image}
              alt="Image"
            />
          </div>
          <div className="grow ml-2 sm:ml-4">
            <h1 className="capitalize text-pirateGold-400 break-words font-semibold break-words">
              {product.name}
            </h1>
            <span className="text-sm text-shark-200 z-10 hidden sm:block">
              {product.shortDescription}
            </span>
          </div>
          <div className="sm:flex">
            <h1 className="text-shark-200 whitespace-nowrap mx-1 sm:mx-4 text-end font-light">
              {product.quantity} {product.quantityType}.
            </h1>
            <h1 className="text-yellow-400 sm:w-20 mx-1 sm:mr-2 whitespace-nowrap text-end font-semibold">
              {product.price.toFixed(2)} лв.
            </h1>
          </div>
        </Link>
        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
