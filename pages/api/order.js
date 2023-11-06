import prisma from "../../services/prismaClient.mjs";
import dataValidator from "../../validators/dataValidator.js";
import productSchema from "@/schemas/productSchema";

export default async function updateOrder(req, res) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    return res
      .status(405)
      .setHeader("Allow", "POST", "PATCH")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let {
    productsInCart,
    askForPrintedMenu,
    isClosed,
    callTheStaff,
    askForBill,
    comment,
    userEmail,
    orderId,
    productId,
  } = req.body.data;

  if (userEmail) {
    let order;
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    order = await prisma.orders.findUnique({
      where: { id: orderId },
    });
    if (!user || !order) {
      return res.status(400).send({ message: "Invalid data." });
    }
    if (productId || productId == 0) {
      productId = Number(productId);
      await prisma.orderProduct.delete({
        where: {
          id: productId,
        },
      });
    }
    if (!productId && productId !== 0) {
      order = await upsertOrder({
        tableId: order.tableId,
        order: orderId,
        askForBill,
        callTheStaff,
        askForPrintedMenu,
        isClosed,
        comment,
      });
    }
    order = await prisma.orders.findUnique({
      where: { id: orderId },
      include: { orderedProducts: { include: { product: true } } },
    });
    return res.status(200).send({
      message: "Successfully created/updated an Order.",
      order,
    });
  }

  let cookie = req.cookies["order"];
  cookie = cookie.trim();

  if (!cookie) {
    return res
      .status(400)
      .send({ message: "Invalid data. Your cookie has expired." });
  }

  cookie = await prisma.cookies.findFirst({
    where: { cookie },
  });
  const order = cookie.orderId;
  let table;
  const tableId = Number(cookie.cookie.split("_").pop());
  if (!order) {
    table = await prisma.tables.findUnique({
      where: { id: tableId },
    });
    const isOpenOrders = await prisma.orders.findMany({
      where: { tableId, isClosed: false },
    });
    if (isOpenOrders.length > 0) {
      return res.status(400).send({
        message: `There is unclosed order on this table, please contact our staff.`,
      });
    }
  }

  if (!order && !table.status) {
    return res.status(400).send({ message: "Invalid request" });
  }

  if (typeof askForBill === "boolean") {
    await upsertOrder({ tableId, cookieId: cookie.id, order, askForBill });
  }
  if (typeof askForPrintedMenu === "boolean") {
    await upsertOrder({
      tableId,
      cookieId: cookie.id,
      order,
      askForPrintedMenu,
    });
  }
  if (typeof callTheStaff === "boolean") {
    await upsertOrder({
      tableId,
      cookieId: cookie.id,
      order,
      callTheStaff,
    });
  }
  if (typeof isClosed === "boolean") {
    await upsertOrder({
      tableId,
      cookieId: cookie.id,
      order,
      isClosed,
    });
  }
  if (typeof comment === "string") {
    await upsertOrder({ tableId, cookieId: cookie.id, order, comment });
  }

  if (productsInCart.length < 1) {
    return res.status(400).send({
      message: "Invalid data. There are no products in your cart.",
    });
  }

  try {
    const productsIdArray = productsInCart.map((product) => product.id);
    const products = await prisma.products.findMany({
      where: {
        id: {
          in: productsIdArray,
        },
      },
    });

    const productValidationResults = await Promise.all(
      products.map(async (product) => {
        const validateProduct = await dataValidator(
          "product",
          product,
          productSchema
        );
        return validateProduct;
      })
    );
    const invalidProduct = productValidationResults.find(
      (result) => !result.result
    );

    if (invalidProduct) {
      return res.status(422).send({ message: `${invalidProduct.message}` });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).send({ message: `${err.message}` });
  }

  try {
    if (order) {
      const productsIdArray = productsInCart.map((product) => ({
        orderId: order,
        productId: product.id,
      }));
      await prisma.orderProduct.createMany({
        data: productsIdArray,
      });
    } else {
      const newOrder = await upsertOrder({
        tableId,
        cookieId: cookie.id,
      });
      const productsIdArray = productsInCart.map((product) => ({
        orderId: newOrder.id,
        productId: product.id,
      }));
      await prisma.orderProduct.createMany({
        data: productsIdArray,
      });
    }
    return res
      .status(200)
      .send({ message: "Successfully created/updated an Order." });
  } catch (err) {
    console.error(err);
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}

async function upsertOrder({
  tableId,
  cookieId,
  order = undefined,
  askForBill = undefined,
  callTheStaff = undefined,
  askForPrintedMenu = undefined,
  isClosed = undefined,
  comment = "",
}) {
  let data = {
    isClosed: false,
  };

  if (!order) {
    const orderCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    data.orderCode = orderCode;
    data.clientsCookies = { connect: [{ id: cookieId }] };
    data.tableId = tableId;
  }

  if (askForBill !== undefined) {
    data.askForBill = askForBill;
  }

  if (callTheStaff !== undefined) {
    data.callTheStaff = callTheStaff;
  }

  if (askForPrintedMenu !== undefined) {
    data.askForPrintedMenu = askForPrintedMenu;
  }

  if (isClosed !== undefined) {
    data.isClosed = isClosed;
  }

  if (comment) {
    data.comment = comment;
  }

  if (order) {
    return await prisma.orders.update({
      where: { id: order },
      data,
    });
  }
  return await prisma.orders.create({
    data,
  });
}
