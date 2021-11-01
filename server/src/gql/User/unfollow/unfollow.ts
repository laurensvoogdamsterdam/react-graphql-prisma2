import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    unfollow: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      try {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            following: {
              disconnect: {
                id,
              },
            },
          },
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
