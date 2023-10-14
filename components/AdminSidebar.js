import Image from "./Image";
import Link from "next/link";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AdminSidebar({
  navigation,
  yourBar,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-shark-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-pirateGold-200"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-shark-950 px-6 pb-2 ring-1 ring-pirateGold-400">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_1280.png"
                      alt="Bar logo"
                      classNameRoot="w-12 h-12 rounded-full mt-4 border-2 border-pirateGold-400"
                    ></Image>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={
                                  (item.current
                                    ? "bg-shark-800"
                                    : "hover:bg-shark-800") +
                                  " group flex gap-x-3 rounded-sm p-2 text-sm leading-6 font-semibold"
                                }
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="text-pirateGold-400 h-6 w-6 shrink-0"
                                />
                                <h1
                                  className={
                                    (item.current
                                      ? " text-pirateGold-200"
                                      : "text-pirateGold-400") +
                                    " hover:text-pirateGold-200"
                                  }
                                >
                                  {item.name}
                                </h1>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-pirateGold-200">
                          Your Bar
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {yourBar.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={
                                  (item.current
                                    ? "bg-shark-800 text-pirateGold-200"
                                    : "text-pirateGold-400 hover:text-pirateGold-200 hover:bg-shark-800") +
                                  "group flex gap-x-3 rounded-sm p-2 text-sm leading-6 font-semibold"
                                }
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-shark-800 text-[0.625rem] font-medium text-pirateGold-400 group-hover:text-pirateGold-200">
                                  {item.initial}
                                </span>
                                <span
                                  className={
                                    "truncate " +
                                    (!item.current
                                      ? ""
                                      : "text-pirateGold-200 group-hover:text-pirateGold-100")
                                  }
                                >
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-shark-950 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_1280.png"
              alt="Bar logo"
              classNameRoot="w-14 h-14 rounded-full mt-4 border-2 border-pirateGold-400"
            ></Image>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((page) => (
                    <li key={page.name}>
                      <Link
                        href={page.href}
                        className={
                          (page.current
                            ? "bg-shark-800 text-pirateGold-200"
                            : "text-pirateGold-400 hover:text-pirateGold-200 hover:bg-shark-800") +
                          "group flex gap-x-3 rounded-sm p-2 text-sm leading-6 font-semibold"
                        }
                      >
                        <page.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-pirateGold-400">
                  Your Bar
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {yourBar.map((page) => (
                    <li key={page.name}>
                      <Link
                        href={page.href}
                        className={
                          (page.current
                            ? "bg-shark-800 text-pirateGold-200"
                            : "text-pirateGold-400 hover:text-pirateGold-200 hover:bg-shark-800") +
                          "group flex gap-x-3 rounded-sm p-2 text-sm leading-6 font-semibold"
                        }
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-shark-800 text-[0.625rem] font-medium text-pirateGold-400 group-hover:text-pirateGold-200">
                          {page.initial}
                        </span>
                        <span
                          className={
                            "truncate " +
                            (!page.current
                              ? ""
                              : "text-pirateGold-200 group-hover:text-pirateGold-100")
                          }
                        >
                          {page.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
