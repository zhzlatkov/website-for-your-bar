import bcrypt from "bcrypt";
import prisma from "../../services/prismaClient.mjs";

export default async function registration(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .send({ message: "Wrong HTTP Request Method" });
  }

  const body = await req.body;
  const { name, email, password } = body;
  if (!name || !email || !password) {
    return req.response({ status: 400 }, "Missing name, email or password.");
  }
  try {
    const isEmailExists = await prisma.user.findUnique({
      where: { email },
    });
    if (isEmailExists) {
      return req.response(
        { status: 400 },
        "There is already user with this email."
      );
    }

    const isNameExists = await prisma.user.findUnique({ where: { name } });
    if (isNameExists) {
      return req.response(
        { status: 400 },
        "There is already user with this name."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return res.send({ status: 200 }, "Great, you register new user.");
  } catch (err) {
    console.error(err);
    return res.status(400).send({
      message: `${err.message}`,
    });
  }
}
