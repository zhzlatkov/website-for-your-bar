import prisma from "../../services/prismaClient.mjs";
import normalizeSettings from "../../normalizers/backend/normalizeSettings.js";
import uploadImageToS3 from "../../services/uploadImageToS3.js";
import setingsSchema from "../../schemas/setingsSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};

export default async function createSettings(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedSettings;
  try {
    sanitizedSettings = normalizeSettings(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedSettings = await dataValidator(
    "setings",
    sanitizedSettings,
    setingsSchema
  );
  if (!validatedSettings.result) {
    return res.status(422).send({ message: `${validatedSettings.message}` });
  }
  if (
    !sanitizedSettings.image.includes(sanitizedSettings.name) &&
    !sanitizedSettings.image.includes("/photos/")
  ) {
    sanitizedSettings.setings.image = await uploadImageToS3(
      sanitizedSettings.image,
      sanitizedSettings.setings.name,
      "setings"
    );
  }

  try {
    await prisma.setings.update({
      where: {
        id: sanitizedSettings.id,
      },
      data: {
        ...sanitizedSettings,
      },
    });
    return res
      .status(200)
      .send({ message: "Successfully created/updated a Settings." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
