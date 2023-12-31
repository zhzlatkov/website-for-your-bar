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
    include: { token: true },
  });

  if (user == null) {
    return res.status(403).send({ message: "Forbidden" });
  }

  const tokenDate = user.token.find(
    (token) => token.token === req.headers.authorization
  );
  const isTokenTooOld = Date.now() - Number(tokenDate.date) > 2592000000;

  if (isTokenTooOld) {
    return res.status(403).send({ message: "Forbidden" });
  }

  return res.status(200).send({ user: user.id, user: user.email });
}
