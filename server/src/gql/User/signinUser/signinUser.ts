import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    signinUser: async (_, args, { prisma }) => {
      const { email, password } = args;
      const user = await prisma.user.findFirst({
        where: { email: email.toLowerCase() },
      });
      if (!user) {
        throw new Error("No account found with this email");
      }
      const matchingPasswords = await bcrypt.compare(password, user.password);
      if (!matchingPasswords) {
        throw new Error("Incorrect password");
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return { ...user, token };
    },
  },
};
