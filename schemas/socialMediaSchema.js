import { object, string, number } from "yup";

const socialMediaSchema = object({
  id: number(),
  text: string().required(),
  link: string(),
});

export default socialMediaSchema;
