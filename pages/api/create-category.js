import prisma from "../../services/prismaClient.mjs";
import normalizeCategory from "../../normalizers/backend/normalizeCategory.js";
import uploadImageToS3 from "../../services/uploadImageToS3.js";
import categoryValidator from "../../validators/categoryValidator.js";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};

export default async function createCategory(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  const sanitizedCategory = normalizeCategory(req.body);

  const validatedCategory = await categoryValidator(sanitizedCategory);
  if (!validatedCategory.result) {
    return res.status(422).send({ message: `${validatedCategory.message}` });
  }

  sanitizedCategory.category.photoPath = await uploadImageToS3(
    sanitizedCategory.image,
    sanitizedCategory.category.name,
    "categories"
  );

  try {
    await prisma.categories.create({
      data: {
        ...sanitizedCategory.category,
      },
    });
    return res
      .status(200)
      .send({ message: "Successfully created a Category." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
