import { PrismaClient } from "@prisma/client";
import { PubSub } from "graphql-yoga";

/** Database instance */
const prisma = new PrismaClient();

/** PubSub for pagination and realtime fetching */
const pubsub = new PubSub();
/**
 * Context interface
 */
export interface Context {
  prisma: PrismaClient;
  request: any; // HTTP request carrying the `Authorization` header
  pubsub: PubSub;
}


/**
 * Context `constructor`
 * @param request 
 * @returns 
 */
export function createContext(request: any) {
  return {
    ...request,
    prisma,
    pubsub,
  };
}
