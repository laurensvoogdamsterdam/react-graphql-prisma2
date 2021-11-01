export default {
  Query: {
    allUsers: async (parent, args, { prisma }, info) => {
      return await prisma.user.findMany({});
    },
  },
};
