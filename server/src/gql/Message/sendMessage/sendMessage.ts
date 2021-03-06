import { isAuthenticated } from "../../../utils";

export default {
  Mutation: {
    sendMessage: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { roomId, message, toId } = args;
      let room;
      if (roomId === undefined) {
        if (user.id !== toId) {
          room = await prisma.room.create({
            participants: {
              connect: [{ id: toId }, { id: user.id }],
            },
          });
        }
      } else {
        room = await prisma.room({ id: roomId });
      }
      if (!room) {
        throw Error("Room not found");
      }
      const getTo = room.participants.filter(
        (participant) => participant.id !== user.id
      )[0];
      return prisma.createMessage({
        text: message,
        from: {
          connect: { id: user.id },
        },
        to: {
          connect: {
            id: roomId ? getTo.id : toId,
          },
        },
        room: {
          connect: {
            id: room.id,
          },
        },
      });
    },
  },
};
