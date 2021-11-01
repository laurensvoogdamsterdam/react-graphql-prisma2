import { isAuthenticated } from "../../../utils";

export default {
  Query: {
    seeRoom: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const canSee = await prisma.room.findMany({
        participants_some: {
          id: user.id,
        },
      });
      if (canSee) {
        return await prisma.room.findUnique({ where: { id } });
      } else {
        throw Error("You can't see this");
      }
    },
  },
};
