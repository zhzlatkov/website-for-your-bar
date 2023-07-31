import { object, string, boolean, number } from "yup";

const settingsSchema = object({
  name: string().required(),
  logo: string().required(),
  email: string().required(),
  phone: number().required(),
  homeHeading1: string().required(),
  homeHeading2: string().required(),
  shortDescription: string().required(),
  addressStatus: boolean().required(),
  address: string(),
  statusFunFacts: boolean().required(),
  statusJokes: boolean().required(),
  jokesImage: string(),
  statusOrdering: boolean().required(),
});

export default settingsSchema;
