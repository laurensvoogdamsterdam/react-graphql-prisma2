import { isAuthenticated } from "../../utils";

export default {
  User: {
    posts: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .posts();
    },
    following: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .following();
    },
    followers: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .followers();
    },
    likes: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .likes();
    },
    messagesFrom: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .messagesFrom();
    },
    messagesTo: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .messagesTo();
    },
    comments: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .comments();
    },
    rooms: async (parent, _, { prisma }, __) => {
      return await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .rooms();
    },
    postsCount: async (parent, _, { prisma }, __) => {
      const posts = await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .posts();
      return posts.length;
    },
    followingCount: async (parent, _, { prisma }, __) => {
      const following = await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .following();
      return following.length;
    },
    followersCount: async (parent, _, { prisma }, __) => {
      const followers = await prisma.user
        .findUnique({
          where: { id: parent.id },
        })
        .followers();
      return followers.length;
    },
    fullName: (parent, args, { request, prisma }, __) =>
      `${parent.firstName} ${parent.lastName}`,
    isFollowing: async (parent, _, { request, prisma }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return await prisma.user.findMany({
          where: {
            AND: [
              {
                id: user,
              },
              {
                following_some: {
                  id: parentId,
                },
              },
            ],
          },
        });
      } catch {
        return false;
      }
    },
    isSelf: (parent, _, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id: parentId } = parent;
      return user === parentId;
    },
  },
};
