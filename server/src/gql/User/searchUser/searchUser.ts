export default {
  Query: {
    searchUser: async (_, args, { prisma }, __) =>
      prisma.user.findMany({
        where: {
          OR: [
            { username_contains: args.term },
            { firstName_contains: args.term },
            { lastName_contains: args.term },
          ],
        },
      }),
  },
};
