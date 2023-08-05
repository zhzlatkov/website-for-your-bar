import prisma from "../../services/prismaClient.mjs";
import normalizeTable from "../../normalizers/normalizeTable.js";
import generateRandomString from "../../calls/generateRandomString.js";
import tableSchema from "../../schemas/tableSchema.js";
import dataValidator from "../../validators/dataValidator.js";

export default async function updateTable(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  let sanitizedTable;
  try {
    sanitizedTable = normalizeTable(req.body.data);
  } catch (err) {
    return res.status(400).send({ message: `${err.message}` });
  }

  const validatedTable = await dataValidator(
    "table",
    sanitizedTable,
    tableSchema
  );

  if (validatedTable.result) {
    return res.status(422).send({ message: `${validatedTable.message}` });
  }

  try {
    if (sanitizedTable.hasOwnProperty("id")) {
      sanitizedTable.url = "/tables/" + generateRandomString();
      await prisma.tables.create({
        data: {
          ...sanitizedTable,
        },
      });
    } else {
      await prisma.tables.update({
        where: {
          id: sanitizedTable.id,
        },
        data: {
          ...sanitizedTable,
        },
      });
    }
    return res
      .status(200)
      .send({ message: "Successfully created/updated a Table." });
  } catch (e) {
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
