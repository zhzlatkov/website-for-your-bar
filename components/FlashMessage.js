"use client";

import { useEffect, useState } from "react";
import { useOrderContext } from "@/context/OrderContext.js";

export default function FlashMessage() {
  const { flashMessages, updateFlashMessages } = useOrderContext();
  useEffect(() => {
    if (!flashMessages.status) return;
    setTimeout(() => {
      updateFlashMessages({ ...flashMessages, status: false });
    }, 2000);
  }, [flashMessages, updateFlashMessages]);

  return (
    <div
      className={
        "fixed left-0 right-0 top-16 z-40 border-0 opacity-0 transition-opacity duration-1000 " +
        (flashMessages.status ? "opacity-100" : "opacity-0")
      }
    >
      <div
        className={`bg-${flashMessages.color}-700/90 max-w-fit py-2 px-4 m-auto border-2 rounded-md border-${flashMessages.color}-900`}
      >
        <h3 className={`text-${flashMessages.color}-200 m-auto text-center`}>
          {flashMessages.message}
        </h3>
      </div>
    </div>
  );
}
