export default function normalizeOrder(order = null) {
  const sanitizedOrder = {
    id: order ? Number(order.id) : undefined,
    order_code: order ? Number(order.orderCode) : 0,
    table: order ? Number(order.tableID) : 0,
    order_status: order ? Boolean(order.isClosed) : false,
  };
  return sanitizedOrder;
}
