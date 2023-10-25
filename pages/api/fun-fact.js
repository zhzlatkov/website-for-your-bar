import prisma from "../../services/prismaClient.mjs";
import normalizedFunFact from "../../normalizers/backend/normalizeFunFact.js";
import funFactSchema from "../../schemas/funFactSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export default async function updatedFunFact(req, res) {
  if (req.method !== "POST" && req.method !== "PATCH") {
    return res
      .status(405)
      .setHeader("Allow", "POST", "PATCH")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizeddFunFact;
  try {
    sanitizeddFunFact = normalizedFunFact(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validateddFunFact = await dataValidator(
    "funFact",
    sanitizeddFunFact,
    funFactSchema
  );

  if (!validateddFunFact.result) {
    return res.status(422).send({ message: `${validateddFunFact.message}` });
  }

  try {
    if (!sanitizeddFunFact.id) {
      await prisma.funFacts.create({
        data: {
          ...sanitizeddFunFact,
        },
      });
    } else {
      await prisma.funFacts.update({
        where: {
          id: sanitizeddFunFact.id,
        },
        data: {
          ...sanitizeddFunFact,
        },
      });
    }
    return res
      .status(200)
      .send({ message: "Successfully created/updated a FunFact." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
