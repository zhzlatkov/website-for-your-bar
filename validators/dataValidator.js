import prisma from "../services/prismaClient.mjs";

export async function validateData(data, schema) {
  let isDataValid = {};
  try {
    await schema.validate(data);
    isDataValid = { result: true };
  } catch (e) {
    isDataValid = { result: false, error: e.message };
  }

  return isDataValid;
}

export default async function dataValidator(dataType, sanitizedData, schema) {
  if (sanitizedData.hasOwnProperty("image") && sanitizedData.image === "") {
    return { result: false, message: "Image is missing" };
  }
  const isDataValid = await validateData(sanitizedData, schema);
  if (!isDataValid.result) {
    return { result: false, message: isDataValid.error };
  }

  let isDataNameUnique = true;
  let isDataNameExists;

  if (sanitizedData.hasOwnProperty("name")) {
    const where = {
      where: {
        name: sanitizedData.name,
      },
    };

    switch (dataType) {
      case "category":
        isDataNameExists = await prisma.categories.findFirst(where);
        break;
      case "product":
        isDataNameExists = await prisma.products.findFirst(where);
        break;
      case "order":
        isDataNameExists = await prisma.orders.findFirst(where);
        break;
      case "table":
        isDataNameExists = await prisma.tables.findFirst(where);
        break;
      case "joke":
        isDataNameExists = await prisma.jokes.findFirst(where);
        break;
      case "funFact":
        isDataNameExists = await prisma.funFacts.findFirst(where);
        break;
      case "settings":
        isDataNameExists = await prisma.settings.findFirst(where);
        break;
      case "service":
        isDataNameExists = await prisma.services.findFirst(where);
        break;
      case "socialMedia":
        isDataNameExists = await prisma.socialMedias.findFirst(where);
        break;
      default:
        return {
          result: false,
          message: "There is not such a type of data",
        };
    }
    if (sanitizedData.hasOwnProperty("id")) {
      isDataNameUnique = !Boolean(isDataNameExists)
        ? true
        : isDataNameExists.id === Number(sanitizedData.id);
    } else {
      isDataNameUnique = !Boolean(isDataNameExists);
    }
  }

  if (!isDataNameUnique) {
    return {
      result: false,
      message: `This ${dataType} name already exists`,
    };
  }

  return { result: true, message: `${dataType} is validated successfully` };
}
