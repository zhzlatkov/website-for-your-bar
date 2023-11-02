import prisma from "../../services/prismaClient.mjs";

export default async function createCategory(req, res) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    return res
      .status(405)
      .setHeader("Allow", "POST", "PATCH")
      .send({ message: "Wrong HTTP Request Method" });
  }

  const orderCookie = req.cookies["order"];
  const tableId = orderCookie.split("_").pop();
  const allowOrderingCode = Number(req.body.code);

  const isTableExist = await prisma.tables.findUnique({
    where: { id: tableId },
  });
  if (!isTableExist) {
    return res.status(404).send({
      message: `We don't have this table in our system. Please scan the QR code and try again.`,
    });
  }

  const orders = await prisma.orders.findMany({
    where: { tableId },
    include: { clientsCookies: true, orderedProducts: true },
  });
  if (orders.length > 1) {
    return res.status(404).send({
      message: `There are more than one opened orders for your table. Please contact our staff.`,
    });
  }
  const order = orders[0];
  if (!order) {
    return res.status(404).send({
      message: `There is no opened order for your table. Please scan the QR Code and try again.`,
    });
  }

  if (order.clientCookies.includes(orderCookie)) {
    return res.status(404).send({
      message: `You already can order for this table.`,
    });
  }

  if (order.orderCode !== allowOrderingCode) {
    return res.status(404).send({
      message: `This code is invalid, please try again with the right code.`,
    });
  }

  try {
    await prisma.cookies.upsert({
      where: { orderCookie },
      update: { orderId: order.id },
      create: { orderCookie, orderId: order.id },
    });

    return res.status(200).send({
      message: "Successfully submit the ordering code, now you can order.",
    });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
