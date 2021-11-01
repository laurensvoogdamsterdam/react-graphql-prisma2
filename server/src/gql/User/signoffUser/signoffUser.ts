import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    signoffUser: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const userToDelete = await prisma.user.findUnique({
        where: { id: user },
      });
      if (!userToDelete) {
        throw new Error("No account found with this email");
      }
      const deletedUser = await prisma.user.delete({
        where: { id: user },
      });

      const token = "";
      return { ...userToDelete, token };
    },
  },
};
