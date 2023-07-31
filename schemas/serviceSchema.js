import { object, string, number } from "yup";

const serviceSchema = object({
  id: number(),
  name: string().required(),
  information: string().required(),
});

export default serviceSchema;
