"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var schema_1 = require("@graphql-tools/schema");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
var allTypes = (0, merge_graphql_schemas_1.fileLoader)(path_1.default.join(__dirname, "../src/gql/**/*.graphql"));
var allResolvers = (0, merge_graphql_schemas_1.fileLoader)(path_1.default.join(__dirname, "gql/**/*.js"));
var schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: (0, merge_graphql_schemas_1.mergeTypes)(allTypes),
    resolvers: (0, merge_graphql_schemas_1.mergeResolvers)(allResolvers),
});
exports.default = schema;
