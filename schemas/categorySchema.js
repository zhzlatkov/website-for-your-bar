import { object, string, boolean, number } from "yup";

const categorySchema = object({
  id: number(),
  name: string().required(),
  shortDescription: string().required(),
  status: boolean().required(),
  image: string(),
});

export default categorySchema;
