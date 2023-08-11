export default function normalizeOrder(order = null) {
  const sanitizedOrder = {
    id: order && order.id ? Number(order.id) : undefined,
    name: order ? String(order.name).trim().toLowerCase() : "",
    orderCode: order ? Number(order.order_code) : 0,
    tableID: order ? Number(order.table) : 0,
    isClosed: order ? Bolean(order.order_status) : false,
  };
  if (order.id) {
    sanitizedOrder.id = Number(order.id);
  }
  return sanitizedOrder;
}
