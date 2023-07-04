import prisma from "../../services/prismaClient.mjs";
import bcrypt from "bcrypt";

export default async function login(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || null;
  const reqAtTime = parseInt(Date.now() / 1000);

  await prisma.loginAttempt.create({
    data: {
      ip: ip,
      createdAt: reqAtTime,
    },
  });

  const reqCount = await prisma.loginAttempt.count({
    where: {
      ip: { equals: ip },
      createdAt: { gte: reqAtTime - 60 },
    },
  });

  if (reqCount > 5) {
    return res
      .status(429)
      .send({ message: "Please wait another 60 seconds before trying again" });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: req.body.email,
      },
    },
  });
  if (user == null) {
    return res.status(422).send({
      message: "We couldn't find a user with that email.",
    });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(422).send({
      message: "Your password is incorrect.",
    });
  }

  const accessToken = generateToken();

  await prisma.authToken.create({
    data: {
      token: accessToken,
      date: Date.now(),
      userId: user.id,
    },
  });

  return res.status(200).send({ accessToken });
}

function generateToken(len = 64) {
  const alphameric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+=-_";

  let token = [];

  for (let i = 0; i < len; i++) {
    let index = Math.floor(Math.random() * alphameric.length);
    token.push(alphameric.charAt(index));
  }

  return token.join("");
}
