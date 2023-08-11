export default function normalizeOrder(order = null) {
  const sanitizedOrder = {
    name: order ? String(order.name).trim().toLowerCase() : "",
    order_code: order ? Number(order.orderCode) : 0,
    table: order ? Number(order.tableID) : 0,
    order_status: order ? Bolean(order.isClosed) : false,
  };
  return sanitizedOrder;
}
