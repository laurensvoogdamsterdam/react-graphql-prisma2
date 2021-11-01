"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Subscription: {
        newMessage: {
            subscribe: function (_, args, _a, __) {
                var prisma = _a.prisma;
                var roomId = args.roomId;
                return prisma.$subscribe.message
                    .findMany({
                    where: {
                        AND: [
                            { mutation_in: "CREATED" },
                            {
                                node: {
                                    room: { id: roomId },
                                },
                            },
                        ],
                    },
                })
                    .node();
            },
            resolve: function (payload) { return payload; },
        },
    },
};
