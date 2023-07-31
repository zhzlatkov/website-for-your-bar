import { object, string, boolean, number } from "yup";

const orderSchema = object({
  id: number(),
  orderCode: number().required(),
  tableId: number().required(),
  isClosed: boolean().required(),
});

export default orderSchema;
