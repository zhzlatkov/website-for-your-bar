import prisma from "../../services/prismaClient.mjs";
import normalizeJoke from "../../normalizers/backend/normalizeJoke.js";
import jokeSchema from "../../schemas/jokeSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export default async function updateJoke(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedJoke;
  try {
    sanitizedJoke = normalizeJoke(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedJoke = await dataValidator("joke", sanitizedJoke, jokeSchema);

  if (validatedJoke.result) {
    return res.status(422).send({ message: `${validatedJoke.message}` });
  }

  try {
    if (!sanitizedJoke.id) {
      await prisma.jokes.create({
        data: {
          ...sanitizedJoke,
        },
      });
    } else {
      await prisma.jokes.update({
        where: {
          id: sanitizedJoke.id,
        },
        data: {
          ...sanitizedJoke,
        },
      });
    }
    return res
      .status(200)
      .send({ message: "Successfully created/updated a Joke." });
  } catch (err) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
