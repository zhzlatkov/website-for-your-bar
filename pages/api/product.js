import prisma from "../../services/prismaClient.mjs";
import normalizeProduct from "../../normalizers/backend/normalizeProduct.js";
import uploadImageToS3 from "../../services/uploadImageToS3.js";
import productSchema from "../../schemas/productSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};

export default async function createProduct(req, res) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    return res
      .status(405)
      .setHeader("Allow", "POST", "PATCH")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedProduct;
  try {
    sanitizedProduct = normalizeProduct(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedProduct = await dataValidator(
    "product",
    sanitizedProduct,
    productSchema
  );
  if (!validatedProduct.result) {
    return res.status(422).send({ message: `${validatedProduct.message}` });
  }

  const isCategoryExist = await prisma.categories.findFirst({
    where: {
      id: sanitizedProduct.categoryId,
    },
  });

  if (!isCategoryExist) {
    return res.status(422).send({
      message: `Category with ID:${sanitizedProduct.categoryId} is not exist.`,
    });
  }
  if (
    !sanitizedProduct.image.includes(sanitizedProduct.name) &&
    !sanitizedProduct.image.includes("/photos/")
  ) {
    sanitizedProduct.image = await uploadImageToS3(
      sanitizedProduct.image,
      sanitizedProduct.name,
      "products"
    );
  }

  try {
    if (!sanitizedProduct.id) {
      await prisma.products.create({
        data: {
          ...sanitizedProduct,
        },
      });
    } else {
      await prisma.products.update({
        where: {
          id: sanitizedProduct.id,
        },
        data: {
          ...sanitizedProduct,
        },
      });
    }
    return res
      .status(200)
      .send({ message: "Successfully created/updated a Product." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
