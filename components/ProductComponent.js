import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "./Image";
import Link from "next/link";

export default function ProductComponent({ product }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:py-20 lg:flex lg:max-w-6xl lg:px-8 bg-shark-950">
      <div className="m-auto mt-2 flex max-w-6xl flex-col items-center gap-x-8 gap-y-4 px-6 sm:gap-y-8 md:px-8 lg:flex-row lg:items-stretch lg:min-h-[520px]">
        <div className="h-96 w-full max-w-2xl md:w-96 lg:h-auto max-h-[65%] flex-none">
          <Image
            src={product.image}
            alt={product.name}
            classNameRoot="h-full xl:mx-0"
            classNameImage="inset-0 h-full w-full rounded-md bg-shark-800 object-cover object-top border-pirateGold-200 border-4"
          />
        </div>
      </div>
      <div className="m-auto">
        <div className="text-center mt-2 lg:text-left lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <Link
              href={`/categories/${product.category.name}`}
              className="font-medium text-pirateGold-400 hover:text-pirateGold-200"
            >
              {product.category.name.toUpperCase()}
              {" / "}
            </Link>
            <Link
              href={`/products/${product.name}`}
              className="font-medium text-pirateGold-400 hover:text-pirateGold-200"
            >
              {product.name.toUpperCase()}
            </Link>
          </nav>

          <div className="mt-4">
            <h1 className="text-left text-3xl font-bold tracking-tight text-pirateGold-200 sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>
            <div className="flex items-center">
              <p className="text-lg text-pirateGold-200 sm:text-xl">
                {product.price}
              </p>
              <div className="ml-4 border-l flex border-gray-300">
                <p className="ml-2 text-sm text-pirateGold-400">
                  {product.quantity} {product.quantityType}
                </p>
                {product.status ? (
                  <>
                    <CheckIcon
                      className="ml-4 h-5 w-5 flex-shrink-0 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-pirateGold-400">
                      Available for ordering
                    </p>
                  </>
                ) : (
                  <>
                    <XMarkIcon
                      className="ml-4 h-5 w-5 flex-shrink-0 text-red-500"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-pirateGold-400">
                      Unavailable for ordering
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-left text-base indent-4 text-pirateGold-200">
                {product.longDescription}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
