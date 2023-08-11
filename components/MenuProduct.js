import Link from "next/link";
import Image from "./Image";

export default function MenuProducts({ product, table, settings }) {
  return (
    <section key={product.id} className="my-6 items-center w-11/12 mx-auto">
      <div className="flex">
        <Link
          href={`/products/${product.name}`}
          className="group relative grow flex items-center justify-between cursor-pointer mr-2"
        >
          <div
            className="text-sm text-pirateGold-500 border-pirateGold-100 rounded-lg shadow-sm w-full
                transition transform z-10 inline-block translate-y-8 ease-in-out invisible group-hover:visible group-hover:translate-y-0 absolute -top-20
                text-white"
          >
            <div className="relative">
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
          </div>

          <h1 className="capitalize text-pirateGold-400 grow font-semibold">
            {product.name}
          </h1>
          <h1 className="text-shark-200 whitespace-nowrap mx-4 font-light">
            {product.quantity} {product.quantityType}.
          </h1>
          <h1 className="text-yellow-400 whitespace-nowrap font-semibold">
            {product.price} лв.
          </h1>
        </Link>
        <button
          key={"order" + "_" + product.name}
          className={
            "whitespace-nowrap max-h-8 m-auto ml-2 px-2 py-1 text-sm text-shark-200 uppercase border-2 rounded-sm border-pirateGold-400 hover:text-pirateGold-400 hover:border-shark-400 " +
            (!table.status && !settings.statusOrdering ? "" : "hidden")
          }
        >
          Order
        </button>
      </div>

      <div className=""></div>
    </section>
  );
}
