import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    toggleLike: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { postId } = args;
      const { user } = request;
      const filterOptions = {
        where: {
          AND: [
            {
              user: {
                id: user,
              },
            },
            {
              post: {
                id: postId,
              },
            },
          ],
        },
      };
      try {
        const existingLike = await prisma.like.findMany(filterOptions);
        if (existingLike.length > 0) {
          await prisma.like.deleteMany(filterOptions);
        } else {
          const newLike = await prisma.like.create({
            data: {
              user: {
                connect: {
                  id: user,
                },
              },
              post: {
                connect: {
                  id: postId,
                },
              },
            },
          });
        }
        return true;
      } catch {
        return false;
      }
    },
  },
};
