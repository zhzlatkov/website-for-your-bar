import { object, string, boolean, number } from "yup";
import prisma from "../services/prismaClient.mjs";

async function validateProduct(product) {
  let productSchema = object({
    product: object({
      id: number(),
      name: string().required(),
      categoryId: number().required().positive().integer(),
      price: number().required().positive().integer(),
      quantity: number().required().positive().integer(),
      quantityType: string(),
      shortDescription: string().required(),
      longDescription: string().required(),
      status: boolean().required(),
      photoPath: string(),
    }),
    uploadPhoto: string(),
  });
  let isProductValid = {};

  try {
    productSchema.validate(product);
    isProductValid = { result: true };
  } catch (err) {
    isProductValid = { result: false, error: err.message };
  }

  return isProductValid;
}

export default async function productValidator(sanitizedProduct) {
  if (
    sanitizedProduct.uploadPhoto === "" &&
    sanitizedProduct.product.photoPath === ""
  ) {
    return { result: false, message: "Image is missing" };
  }

  const isProductValid = await validateProduct(sanitizedProduct);
  if (!isProductValid.result) {
    return { result: false, message: isProductValid.error };
  }
  const { product } = sanitizedProduct;

  let isProductNameUnique = false;

  if (product.id) {
    const isExistingProduct = await prisma.products.findFirst({
      where: {
        name: product.name,
      },
    });

    isProductNameUnique = !isExistingProduct
      ? true
      : isExistingProduct.id === Number(product.id);
  } else {
    isProductNameUnique = Boolean(
      !(await prisma.products.findFirst({
        where: {
          name: product.name,
        },
      }))
    );
  }

  if (!isProductNameUnique) {
    return {
      result: false,
      message: "This product name already exists",
    };
  }

  const isCategoryExist = await prisma.categories.findFirst({
    where: {
      id: Number(product.categoryId),
    },
  });

  if (!isCategoryExist) {
    return {
      result: false,
      message: "No such an existing category",
    };
  }
  return { result: true, message: "product is validated successfully" };
}
