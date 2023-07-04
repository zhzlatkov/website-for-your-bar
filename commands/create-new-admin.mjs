import prisma from '../services/prismaClient.mjs';
import bcrypt from 'bcrypt';

const createAdmin = async () => {
  if (process.argv.length < 4) {
    return console.log('Please enter your correct email and password.');
  }

  const email = process.argv[2];
  const password = process.argv[3];

  if (email === '' && password === '') {
    return console.error('Please fill in all required information.');
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return console.log('Hey, you alredy have an account with this email.');
  }

  bcrypt.hash(password, 2, async function (err, hash) {
    if (err) return console.error(err);
    await prisma.user.create({
      data: {
        email,
        password: hash,
      },
    });
    console.log('Nice, you just created a new admin account.');
  });
};

createAdmin();
