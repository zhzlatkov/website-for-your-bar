import prisma from "../../services/prismaClient.mjs";
import normalizeService from "../../normalizers/backend/normalizeService.js";
import serviceSchema from "../../schemas/serviceSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export default async function updateService(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedService;
  try {
    sanitizedService = normalizeService(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedService = await dataValidator(
    "service",
    sanitizedService,
    serviceSchema
  );

  if (validatedService.result) {
    return res.status(422).send({ message: `${validatedService.message}` });
  }

  try {
    if (!sanitizedService.id) {
      await prisma.services.create({
        data: {
          ...sanitizedService,
        },
      });
    } else {
      await prisma.services.update({
        where: {
          id: sanitizedService.id,
        },
        data: {
          ...sanitizedService,
        },
      });
    }
    return res.status(200).send({ message: "Successfully updated a Service." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
