import Image from "./Image";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  EnvelopeOpenIcon,
  ShoppingCartIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import { useOrderContext } from "@/context/OrderContext.js";

export default function Navbar({ settings }) {
  const { allowedOrder, orderedProducts, productsInCart } = useOrderContext();

  return (
    <Disclosure as="nav" className="bg-shark-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 lg:px-6 lg:px-8 h-16">
            <div className="flex items-center h-16 justify-between lg:justify-end">
              <div className="hidden lg:block grow">
                <div className="flex items-center justify-center">
                  <div className="pl-24 flex w-1/3 justify-end">
                    <Link
                      href="/"
                      className="rounded-sm w-24 m-auto py-2 text-center text-sm font-medium self-center text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200"
                    >
                      Home
                    </Link>
                    <Link
                      href="/menu"
                      className="rounded-sm w-24 m-auto py-2 text-center text-sm font-medium self-center text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200"
                    >
                      Menu
                    </Link>
                  </div>
                  <Link href="/">
                    <Image
                      src={settings.logo}
                      alt="Bar logo"
                      classNameRoot="w-14 h-14 hidden lg:block mt-14 rounded-full border-2 border-pirateGold-500 z-10"
                      classNameImage="rounded-full border border-pirateGold-500"
                    ></Image>
                  </Link>
                  <div className="flex w-1/3 justify-start">
                    <Link
                      href="/#address"
                      className={
                        "rounded-sm w-24 m-auto py-2 text-center text-sm font-medium self-center text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200 " +
                        (settings.addressStatus ? "" : "hidden")
                      }
                    >
                      Address
                    </Link>
                    <Link
                      href="/contacts"
                      className="rounded-sm w-24 m-auto py-2 text-center text-sm font-medium self-center text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200"
                    >
                      Contacts
                    </Link>
                    <Link
                      href={`tel:+${settings.phone}`}
                      alt={`call to telephone number :+${settings.phone}`}
                      className="hidden my-auto lg:block py-2 m-1"
                    >
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="relative rounded-full bg-shark-800 p-2 text-pirateGold-500 hover:text-pirateGold-200 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-shark-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Call phone number</span>
                          <PhoneArrowUpRightIcon className="h-5 w-5"></PhoneArrowUpRightIcon>
                        </button>
                      </div>
                    </Link>
                    <Link
                      href={`mailto:${settings.email}`}
                      alt={`send email to ${settings.email}`}
                      className="hidden my-auto lg:block py-2 m-1"
                    >
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="relative rounded-full bg-shark-800 p-2 text-pirateGold-500 hover:text-pirateGold-200 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-shark-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Email us</span>
                          <EnvelopeOpenIcon className="h-5 w-5"></EnvelopeOpenIcon>
                        </button>
                      </div>
                    </Link>
                    <Link
                      href="/order"
                      className={
                        "hidden my-auto py-2 m-1 " +
                        (allowedOrder ? "lg:block" : "")
                      }
                    >
                      <div className="flex items-center">
                        <div
                          // type='button'
                          className="relative rounded-full bg-shark-800 p-2 text-pirateGold-500 hover:text-pirateGold-200 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-shark-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Your order</span>
                          <ShoppingCartIcon className="h-5 w-5"></ShoppingCartIcon>
                          <div className="absolute ml-3 -mt-1 w-5 h-5 text-xs align-top rounded-full ring-1 border text-center text-pirateGold-200 border-pirateGold-200 bg-shark-800 hover:text-pirateGold-100 hover:border-pirateGold-100 hover:bg-shark-700">
                            {(productsInCart.length || 0) +
                              (orderedProducts.length || 0)}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/">
                <Image
                  src={settings.logo}
                  alt="Bar logo"
                  classNameRoot="w-10 h-10 lg:hidden rounded-full border border-pirateGold-500 z-10"
                  classNameImage="rounded-full border border-pirateGold-500"
                ></Image>
              </Link>
              <div className="flex lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-sm text-pirateGold-500 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pirateGold-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                as="home"
                href="/"
                className="block rounded-sm bg-pirateGold-900 px-3 py-2 text-base text-center font-medium text-pirateGold-200"
              >
                Home
              </Link>
              <Link
                as="menu"
                href="/menu"
                className="block rounded-sm px-3 py-2 text-base text-center font-medium text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200"
              >
                Menu
              </Link>
              <Link
                href="/#address"
                className={
                  "block rounded-sm px-3 py-2 text-base text-center font-medium text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200 " +
                  (settings.addressStatus ? "" : "hidden")
                }
              >
                Address
              </Link>
              <Link
                as="contacts"
                href="/contacts"
                className="block rounded-sm px-3 py-2 text-base text-center font-medium text-pirateGold-500 hover:bg-shark-700 hover:text-pirateGold-200"
              >
                Contacts
              </Link>
            </div>
            <div className="border-t border-shark-700 pb-3 pt-4">
              <div className="flex items-center px-5 justify-center">
                <Link
                  href={`tel:+${settings.phone}`}
                  alt={`call to telephone number :+${settings.phone}`}
                  className="my-auto lg:block py-2 m-1"
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-shark-800 p-2 text-pirateGold-500 hover:text-pirateGold-200 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-shark-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Call phone number</span>
                      <PhoneArrowUpRightIcon className="h-5 w-5"></PhoneArrowUpRightIcon>
                    </button>
                  </div>
                </Link>
                <Link
                  href={`mailto:${settings.email}`}
                  alt={`send email to ${settings.email}`}
                  className="my-auto lg:block py-2 m-1"
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-shark-800 p-2 text-pirateGold-500 hover:text-pirateGold-200 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-shark-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Email us</span>
                      <EnvelopeOpenIcon className="h-5 w-5"></EnvelopeOpenIcon>
                    </button>
                  </div>
                </Link>
                <Link
                  href="/order"
                  className={
                    "my-auto py-2 m-1 " + (allowedOrder ? "" : "hidden")
                  }
                >
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="relative rounded-full bg-shark-800 p-2 text-pirateGold-500 hover:text-pirateGold-200 hover:bg-shark-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-200 focus:ring-offset-2 focus:ring-offset-shark-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Your order</span>
                      <ShoppingCartIcon className="h-5 w-5"></ShoppingCartIcon>
                      <div className="absolute ml-3 -mt-1 w-5 h-5 text-xs align-top rounded-full ring-1 border text-pirateGold-200 border-pirateGold-200 bg-shark-800 hover:text-pirateGold-100 hover:border-pirateGold-100 hover:bg-shark-700">
                        {(productsInCart.length || 0) +
                          (orderedProducts.length || 0)}
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
