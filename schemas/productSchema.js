import { object, string, boolean, number } from "yup";

const productSchema = object({
  id: number(),
  name: string().required(),
  categoryId: number().required().integer(),
  price: number().required().positive(),
  quantity: number().required().positive().integer(),
  quantityType: string(),
  shortDescription: string().required(),
  longDescription: string().required(),
  status: boolean().required(),
  image: string(),
});

export default productSchema;
