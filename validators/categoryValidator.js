import { object, string, boolean, number } from "yup";
import prisma from "../services/prismaClient.mjs";

async function validateCategory(category) {
  let categorySchema = object({
    category: object({
      id: number(),
      name: string().required(),
      shortDescription: string().required(),
      status: boolean().required(),
      photoPath: string(),
    }),
    uploadPhoto: string(),
  });
  let isCategoryValid = {};

  try {
    await categorySchema.validate(category);
    isCategoryValid = { result: true };
  } catch (err) {
    isCategoryValid = { result: false, error: err.message };
  }

  return isCategoryValid;
}

export default async function categoryValidator(sanitizedCategory) {
  if (
    sanitizedCategory.image === "" &&
    sanitizedCategory.category.photoPath === ""
  ) {
    return { result: false, message: "Image is missing" };
  }

  const isCategoryValid = await validateCategory(sanitizedCategory);
  if (!isCategoryValid.result) {
    return { result: false, message: isCategoryValid.error };
  }

  const { category } = sanitizedCategory;

  let isCategoryNameUnique = false;
  if (category.id) {
    const isExistingCategory = await prisma.categories.findFirst({
      where: {
        name: category.name,
      },
    });
    isCategoryNameUnique = !isExistingCategory
      ? true
      : isExistingCategory.id === Number(category.id);
  } else {
    isCategoryNameUnique = Boolean(
      !(await prisma.categories.findFirst({
        where: {
          name: category.name,
        },
      }))
    );
  }

  if (!isCategoryNameUnique) {
    return {
      result: false,
      message: "This category name already exists",
    };
  }

  return { result: true, message: "category is validated successfully" };
}
