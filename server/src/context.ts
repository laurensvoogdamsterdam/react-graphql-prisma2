import { PrismaClient } from "@prisma/client";
import { PubSub } from "graphql-yoga";

const prisma = new PrismaClient();

const pubsub = new PubSub();
export interface Context {
  prisma: PrismaClient;
  request: any; // HTTP request carrying the `Authorization` header
  pubsub: PubSub;
}

export function createContext(request: any) {
  return {
    ...request,
    prisma,
    pubsub,
  };
}
