export default {
  Query: {
    searchPost: async (_parent, args, { prisma }, _info) =>
      await prisma.post.findMany({
        where: {
          OR: [
            { location_starts_with: args.term },
            { caption_starts_with: args.term },
          ],
        },
      }),
  },
};
