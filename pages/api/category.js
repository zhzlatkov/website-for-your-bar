import prisma from "../../services/prismaClient.mjs";
import normalizeCategory from "../../normalizers/backend/normalizeCategory.js";
import uploadImageToS3 from "../../services/uploadImageToS3.js";
import dataValidator from "../../validators/dataValidator.js";
import categorySchema from "../../schemas/categorySchema.js";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};

export default async function createCategory(req, res) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    return res
      .status(405)
      .setHeader("Allow", "POST", "PATCH")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedCategory;
  try {
    sanitizedCategory = normalizeCategory(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }
  const validatedCategory = await dataValidator(
    "category",
    sanitizedCategory,
    categorySchema
  );
  if (!validatedCategory.result) {
    return res.status(422).send({ message: `${validatedCategory.message}` });
  }

  if (
    !sanitizedCategory.image.includes(sanitizedCategory.name) &&
    !sanitizedCategory.image.includes("/photos/")
  ) {
    sanitizedCategory.image = await uploadImageToS3(
      sanitizedCategory.image,
      sanitizedCategory.name,
      "categories"
    );
  }

  try {
    if (!sanitizedCategory.id) {
      await prisma.categories.create({
        data: {
          ...sanitizedCategory,
        },
      });
    } else {
      await prisma.categories.update({
        where: {
          id: sanitizedCategory.id,
        },
        data: {
          ...sanitizedCategory,
        },
      });
    }
    return res
      .status(200)
      .send({ message: "Successfully created/updated a Category." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
