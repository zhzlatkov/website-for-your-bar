export default function normalizeOrder(order = null) {
  const sanitizedOrder = {
    name: order ? String(order.name).trim().toLowerCase : "",
    order_code: order ? Number(order.orderCode) : 0,
    tableID: order ? Number(order.table) : 0,
    order_status: order ? Bolean(order.isClosed) : false,
  };
  if (order.id) {
    sanitizedOrder.id = Number(order.id);
  }
  return sanitizedOrder;
}
