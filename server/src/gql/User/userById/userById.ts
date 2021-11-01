export default {
  Query: {
    userById: async (_, args, { prisma }, __) => {
      const { id } = args;
      return await prisma.user.findUnique({ where: { id } });
    },
  },
};
