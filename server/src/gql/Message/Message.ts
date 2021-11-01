export default {
  Message: {
    from: async (_parent, { id }, { prisma }, _info) =>
      await prisma.message.findUnique({ where: { id } }).from(),
    to: async (_parent, { id }, { prisma }, _info) =>
      await prisma.message.findUnique({ where: { id } }).to(),
    room: async (_parent, { id }, { prisma }, _info) =>
      await prisma.message.findUnique({ where: { id } }).room(),
  },
};
