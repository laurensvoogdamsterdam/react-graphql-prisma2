import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    follow: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      try {
        await prisma.user.update({
          where: { id: user },
          data: {
            following: {
              connect: {
                id,
              },
            },
          },
        });
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
