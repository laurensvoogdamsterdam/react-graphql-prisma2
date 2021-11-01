export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args, { prisma }, __) => {
        const { roomId } = args;
        return prisma.$subscribe.message
          .findMany({
            where: {
              AND: [
                { mutation_in: "CREATED" },
                {
                  node: {
                    room: { id: roomId },
                  },
                },
              ],
            },
          })
          .node();
      },
      resolve: (payload) => payload,
    },
  },
};
