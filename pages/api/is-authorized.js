import prisma from "../../services/prismaClient.mjs";

export default async function isAuthorized(req, res) {
  const user = await prisma.user.findFirst({
    where: {
      token: {
        some: {
          token: req.headers.authorization,
        },
      },
    },
  });

  if (user == null) {
    return res.status(403).send({ message: "Forbidden" });
  }

  const isTokenTooOld = Date.now() - user.token.date > 2592000000;

  if (isTokenTooOld) {
    return res.status(403).send({ message: "Forbidden" });
  }

  return res.status(200).send({ user: user.id, user: user.email });
}
