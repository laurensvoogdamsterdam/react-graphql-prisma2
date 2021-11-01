"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
exports.default = {
    Query: {
        seeRooms: function (_, __, _a) {
            var request = _a.request, prisma = _a.prisma;
            (0, utils_1.isAuthenticated)(request);
            var user = request.user;
            return prisma.room.findMany({
                where: {
                    participants_some: {
                        id: user.id,
                    },
                },
            });
        },
    },
};
