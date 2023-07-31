export default function normalizeOrder(order = null) {
  const sanitizedOrder = {
    name: order ? String(order.name).trim().toLowerCase : "",
    orderCode: order ? Number(order.order_code) : 0,
    tableID: order ? Number(order.table) : 0,
    isClosed: order ? Bolean(order.order_status) : false,
  };
  return sanitizedOrder;
}
