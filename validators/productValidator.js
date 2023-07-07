import { object, string, boolean, number } from "yup";
import prisma from "../services/prismaClient.mjs";

async function validateProduct(product) {
  let productSchema = object({
    product: object({
      id: number(),
      name: string().required(),
      price: number().required().positive().integer(),
      quantity: number().required().positive().integer(),
      quantityType: string(),
      shortDescription: string().required(),
      longDescription: string().required(),
      status: boolean().required(),
      photoPath: string().when("uploadPhoto", {
        is: (val) => !val || val.length === 0,
        then: string().required(
          "photo path is required if there is no uploaded photo"
        ),
        otherwise: string(),
      }),
    }),
    categoryId: number().required().positive().integer(),
    uploadPhoto: string().when("photoPath", {
      is: (val) => !val || val.length === 0,
      then: string().required(
        "uploading photo is required when creating a product"
      ),
      otherwise: string(),
    }),
  });
  let isProductValid = {};

  try {
    productSchema.validate(product);
    isProductValid = { result: true };
  } catch (err) {
    isProductValid = { result: false, err };
  }

  return isProductValid;
}

export default async function productValidator(sanitizedProduct) {
  const isProductValid = await validateProduct(sanitizedProduct);
  if (!isProductValid.result) {
    return { result: false, message: isProductValid.err };
  }

  const { product, categoryId } = sanitizedProduct;

  let isProductNameUnique = false;
  if (product.id) {
    const isExistingProduct = await prisma.product.findFirst({
      where: {
        name: product.name,
      },
    });
    isProductNameUnique = !isExistingProduct
      ? true
      : isExistingProduct.id === Number(product.id);
  } else {
    isProductNameUnique = Boolean(
      !(await prisma.product.findFirst({
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

  const isCategoryExist = await prisma.category.findFirst({
    where: {
      id: Number(categoryId),
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
