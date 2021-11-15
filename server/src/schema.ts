import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

/**Get all typs and resolvers */
const allTypes = fileLoader(path.join(__dirname, "../src/gql/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "gql/**/*.js"));

/**
 * Join multiple schemas 
 */
const schema: any = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
