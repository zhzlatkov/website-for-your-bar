import prisma from "../../services/prismaClient.mjs";
import normalizeSocialMedia from "../../normalizers/backend/normalizeSocialMedia.js";
import socialMediaSchema from "../../schemas/socialMediaSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export default async function updateSocialMedia(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedSocialMedia;
  try {
    sanitizedSocialMedia = normalizeSocialMedia(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedSocialMedia = await dataValidator(
    "socialMedia",
    sanitizedSocialMedia,
    socialMediaSchema
  );

  if (validatedSocialMedia.result) {
    return res.status(422).send({ message: `${validatedSocialMedia.message}` });
  }

  try {
    await prisma.socialMedias.update({
      where: {
        id: sanitizedSocialMedia.id,
      },
      data: {
        ...sanitizedSocialMedia,
      },
    });
    return res
      .status(200)
      .json({ message: "Social Media updated successfully" });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
}
