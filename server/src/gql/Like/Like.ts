export default {
  Like: {
    post: async (_parent, { id }, { prisma }, _info) => {
      await prisma.like.findUnique({ where: { id } }).post();
    },
    user: async (_parent, { id }, { prisma }, _info) => {
      await prisma.like.findUnique({ where: { id } }).user();
    },
  },
};
