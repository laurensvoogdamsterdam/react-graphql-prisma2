export default {
  Comment: {
    user: async (_parent, { id }, { prisma }, _info) => {
      await prisma.comment.findUnique({ where: { id } }).user();
    },
    post: async (_parent, { id }, { prisma }, _info) => {
      return await prisma.comment.finUnique({ where: { id } }).post();
    },
  },
};
