import { isAuthenticated } from "../../../utils";

export default {
  Query: {
    me: async (_, __, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const me = await prisma.user.findFirst({ where: { id: user } });
      if (!me) {
        throw new Error("No user info found");
      }
      return me;
    },
  },
};
