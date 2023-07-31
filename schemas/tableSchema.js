import { object, string, boolean, number } from "yup";

const tableSchema = object({
  id: number(),
  name: string().required(),
  seats: number(),
  status: boolean().required(),
});

export default tableSchema;
