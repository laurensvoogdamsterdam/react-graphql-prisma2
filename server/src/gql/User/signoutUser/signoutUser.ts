import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    signoutUser: async (_, args, { prisma, request }) => {
      isAuthenticated(request);
      const { user } = request;
      const signedoutUser = await prisma.user.findFirst({
        where: { id: user },
      });
      if (!signedoutUser) {
        throw new Error("No account found with this email");
      }
      const token = "";
      return { ...signedoutUser, token };
    },
  },
};
