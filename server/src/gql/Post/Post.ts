import { isAuthenticated } from "../../utils";

export default {
  Post: {
    isLiked: async (parent, _, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id } = parent;
      const isLiked = await prisma.like.findMany({
        where: {
          AND: [
            {
              user: {
                id: user,
              },
            },
            {
              post: {
                id,
              },
            },
          ],
        },
      });
      if (isLiked.length > 0) {
        return true;
      }
      return false;
    },
    likes: async (parent, { id }, { prisma }, __) => {
      return await prisma.post.findFirst({ where: { id: parent.id } }).likes();
    },
    likeCount: async (parent, { id }, { prisma }, __) => {
      const likes = await prisma.post
        .findFirst({ where: { id: parent.id } })
        .likes();
      return likes.length;
    },
    views: async (parent, { id }, { prisma }, __) => {
      return await prisma.post.findFirst({ where: { id: parent.id } }).views();
    },
    viewCount: async (parent, { id }, { prisma }, __) => {
      const views = await prisma.post
        .findFirst({ where: { id: parent.id } })
        .views();
      return views.length / 2;
    },
    files: async (parent, _, { prisma }, __) => {
      return await prisma.post.findFirst({ where: { id: parent.id } }).files();
    },
    comments: async (parent, { id }, { prisma }, __) => {
      return await prisma.post
        .findFirst({ where: { id: parent.id } })
        .comments();
    },
    commentCount: async (parent, { id }, { prisma }, __) => {
      const comments = await prisma.post
        .findFirst({ where: { id: parent.id } })
        .comments();
      return comments.length;
    },
    user: async (parent, { id }, { prisma }, __) => {
      return await prisma.post.findFirst({ where: { id: parent.id } }).user();
    },
  },
};
