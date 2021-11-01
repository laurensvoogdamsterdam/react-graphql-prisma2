export default {
  Query: {
    allPosts: async (parent, args, { prisma }, info) => {
      return await prisma.post.findMany({});
    },
  },
};
