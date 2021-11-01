import { isAuthenticated } from "../../../utils";

export default {
  Query: {
    seeFeed: async (_, __, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const following = await prisma.user
        .findFirst({ where: { id: user } })
        .following();
      return await prisma.post.findMany({
        where: {
          user: {
            id: { in: [...following.map((user) => user.id), user] },
          },
        },
        orderBy: {
          updatedAt: "desc",
        },
        take: 10,
      });
    },
  },
};
