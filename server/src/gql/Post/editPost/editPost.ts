import { isAuthenticated } from "../../../utils";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editPost: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { id, caption, location, action } = args;
      const { user } = request;
      const postMatch = await prisma.post.findFirst({
        id,
        user: { id: user },
      });
      if (postMatch) {
        if (action === EDIT) {
          return prisma.post.update({
            where: { id },
            data: {
              caption,
              location,
            },
          });
        } else if (action === DELETE) {
          prisma.post.deleteMany({ id });
        }
      } else {
        throw Error("You have no authorization!");
      }
    },
  },
};
