export default {
  Query: {
    seeUser: async (_, args, { prisma }, __) => {
      const { username } = args;
      return prisma.user({ username });
    },
  },
};
