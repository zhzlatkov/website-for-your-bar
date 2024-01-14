import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import MenuProduct from "./MenuProduct";

export default function MenuCategory({ category }) {
  return (
    <Disclosure as="div" key={category.name} className="pt-6">
      {({ open }) => (
        <section>
          <dt className={open ? "animate-open" : "animate-close"}>
            <Disclosure.Button className="flex w-full items-start justify-between text-left hover:text-shadow-h3 focus:text-shadow-h3 text-pirateGold-200">
              <span className="text-base font-semibold leading-7 uppercase shadow-pirateGold-700">
                {category.name}
              </span>
              <span className="my-auto ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon
                    className="h-6 w-6 hover:text-shadow-h3 focus:text-shadow-h3"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusSmallIcon
                    className="h-6 w-6 hover:shadow-md focus:shadow-md"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd">
            {category.products.map((product) => (
              <MenuProduct key={product.name} product={product}></MenuProduct>
            ))}
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
}
