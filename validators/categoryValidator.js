import { object, string, boolean, number } from "yup";
import prisma from "../services/prismaClient.mjs";

async function validateCategory(category) {
  let categorySchema = object({
    category: object({
      id: number(),
      name: string().required(),
      shortDescription: string().required(),
      status: boolean().required(),
      photoPath: string().when("uploadPhoto", {
        is: (val) => !val || val.length === 0,
        then: string().required(
          "photo path is required if there is no uploaded photo"
        ),
        otherwise: string(),
      }),
    }),
    uploadPhoto: string().when("photoPath", {
      is: (val) => !val || val.length === 0,
      then: string().required(
        "uploading photo is required when creating a category"
      ),
      otherwise: string(),
    }),
  });
  let isCategoryValid = {};

  try {
    categorySchema.validate(category);
    isCategoryValid = { result: true };
  } catch (err) {
    isCategoryValid = { result: false, err };
  }

  return isCategoryValid;
}

export default async function categoryValidator(sanitizedCategory) {
  const isCategoryValid = await validateCategory(sanitizedCategory);
  if (!isCategoryValid.result) {
    return { result: false, message: isCategoryValid.err };
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
