export default {
  Query: {
    seeFullPost: async (_, args, { prisma }, __) => {
      const { id } = args;
      return await prisma.post({ id });
    },
  },
};
