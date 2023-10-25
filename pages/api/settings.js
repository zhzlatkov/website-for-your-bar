import prisma from "../../services/prismaClient.mjs";
import normalizeSettings from "../../normalizers/backend/normalizeSettings.js";
import uploadImageToS3 from "../../services/uploadImageToS3.js";
import settingsSchema from "../../schemas/settingsSchema.js";
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
  if (req.method !== "PATCH") {
    return res
      .status(405)
      .setHeader("Allow", "PATCH")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedSettings;
  try {
    sanitizedSettings = normalizeSettings(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedSettings = await dataValidator(
    "settings",
    sanitizedSettings,
    settingsSchema
  );
  if (!validatedSettings.result) {
    return res.status(422).send({ message: `${validatedSettings.message}` });
  }

  if (
    !sanitizedSettings.jokesImage.includes(sanitizedSettings.name) &&
    !sanitizedSettings.jokesImage.includes("-jokes-image") &&
    !sanitizedSettings.jokesImage.includes("/photos/")
  ) {
    sanitizedSettings.jokesImage = await uploadImageToS3(
      sanitizedSettings.jokesImage,
      sanitizedSettings.name + "-jokes-image",
      "settings"
    );
  }
  if (
    !sanitizedSettings.logo.includes(sanitizedSettings.name) &&
    !sanitizedSettings.logo.includes("/photos/") &&
    !sanitizedSettings.logo.includes("-logo")
  ) {
    sanitizedSettings.logo = await uploadImageToS3(
      sanitizedSettings.logo,
      sanitizedSettings.name + "-logo",
      "settings"
    );
  }

  try {
    await prisma.settings.update({
      where: {
        id: 1,
      },
      data: {
        ...sanitizedSettings,
      },
    });
    return res
      .status(200)
      .send({ message: "Successfully created/updated a Settings." });
  } catch (err) {
    console.error(err);
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
