import { isAuthenticated } from "../../../utils";

export default {
  Query: {
    seeRooms: (_, __, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma.room.findMany({
        where: {
          participants_some: {
            id: user.id,
          },
        },
      });
    },
  },
};
