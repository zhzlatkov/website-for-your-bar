import { object, string, number } from "yup";

const funFactSchema = object({
  id: number(),
  text: string().required(),
});

export default funFactSchema;
