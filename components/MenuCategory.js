import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import MenuProduct from "./MenuProduct";

export default function MenuCategory({ category }) {
  return (
    <Disclosure as="div" key={category.name} className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-pirateGold-200">
              <span className="text-base font-semibold leading-7 uppercase">
                {category.name}
              </span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd">
            {category.products.map((product) => (
              <MenuProduct key={product.name} product={product}></MenuProduct>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
