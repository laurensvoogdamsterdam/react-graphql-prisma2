import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    signupUser: async (_, args, { prisma }) => {
      const {
        username,
        password,
        email,
        firstName = "",
        lastName = "",
        bio = "",
      } = args;

      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [
            {
              email: email.toLowerCase(),
            },
            {
              username: username,
            },
          ],
        },
      });

      if (existingUser) {
        if (existingUser.email.toLowerCase() === email) {
          throw new Error("A user with this email address already exist");
        } else {
          throw new Error("A user with this username already exist");
        }
      }
      const passwordHash = await bcrypt.hash(password, 12);
      const user = await prisma.user.create({
        data: {
          username,
          email: email.toLowerCase(),
          password: passwordHash,
          firstName,
          lastName,
          bio,
        },
      });
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return { ...user, token };
    },
  },
};
