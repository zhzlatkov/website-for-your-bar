import prisma from "../../services/prismaClient.mjs";
import normalizeProduct from "../../normalizers/normalizeProduct.js";
import uploadImageToS3 from "../../services/uploadImageToS3.js";
import productValidator from "../../validators/productValidator.js";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};

export default async function createProduct(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }
  console.log(req.body);
  let sanitizedProduct;
  try {
    sanitizedProduct = normalizeProduct(req.body);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedProduct = await productValidator(sanitizedProduct, false);
  if (!validatedProduct.result) {
    return res.status(422).send({ message: `${validatedProduct.message}` });
  }

  sanitizedProduct.product.photoPath = await uploadImageToS3(
    sanitizedProduct.image,
    sanitizedProduct.product.name,
    "products"
  );

  try {
    await prisma.products.create({
      data: {
        ...sanitizedProduct.product,
      },
    });
    return res.status(200).send({ message: "Successfully created a Product." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
