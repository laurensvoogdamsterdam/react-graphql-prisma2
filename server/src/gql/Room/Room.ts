export default {
  Room: {
    participants: async (_, { id }, { prisma, request }, __) => {
      return await prisma.room.findFirs({ where: { id } }).participants();
    },
    messages: async (_, { id }, { prisma }, __) => {
      return await prisma.room({ id }).messages();
    },
  },
};
