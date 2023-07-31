import { object, string, number } from "yup";

const jokeSchema = object({
  id: number(),
  author: string().required(),
  place: string().required(),
  text: string().required(),
});

export default jokeSchema;
