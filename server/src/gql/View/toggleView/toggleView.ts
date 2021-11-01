import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    viewPost: async (_, args, { request, prisma }) => {
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
        const alreadyViewed = await prisma.view.findMany(filterOptions);
        if (alreadyViewed.length > 0) {
          return false;
        } else {
          const newView = await prisma.view.create({
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
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
