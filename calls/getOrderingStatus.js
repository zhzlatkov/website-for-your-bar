import prisma from "@/services/prismaClient.mjs";
import normalizeOrderedProduct from "@/normalizers/normalizeOrderedProduct";

export default async function getOrderingStatus(orderCookie, statusOrdering) {
  if (!orderCookie) {
    return { status: false, order: null, error: true };
  }

  const cookie = await prisma.cookies.findFirst({
    where: { cookie: orderCookie },
  });

  if (!cookie) {
    return { status: false, order: null, error: false };
  }

  let orders, order;
  if (cookie.orderId) {
    orders = await prisma.orders.findMany({
      where: { id: cookie.orderId, isClosed: false },
      include: {
        clientsCookies: true,
        orderedProducts: { include: { product: true } },
      },
    });
    if (orders.length !== 1) {
      return { status: false, order: null, error: false };
    }

    order = orders[0];
    order.orderedProducts = order.orderedProducts.map((orderedProduct) => {
      return normalizeOrderedProduct(orderedProduct.product);
    });
    return { status: true, order, error: false };
  }

  const tableId = Number(orderCookie.split("_").pop());
  orders = await prisma.orders.findMany({
    where: {
      tableId,
      isClosed: false,
    },
    include: {
      clientsCookies: true,
      orderedProducts: true,
    },
  });

  if (orders.length === 0) {
    return {
      status: statusOrdering,
      order: null,
      error: false,
    };
  }
  return {
    status: orders.length < 2 ? true : false,
    order: null,
    error: orders.length < 2 ? false : true,
  };
}
