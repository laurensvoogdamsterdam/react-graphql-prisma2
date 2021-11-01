import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { createContext } from "./context";

const server = new GraphQLServer({
  schema,
  context: createContext,
});

// server.express.use(logger("dev"));
const PORT = process.env.PORT || 4000;
const options = {
  port: PORT,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
  uploads: true,
  formatError(err: any): any {
    return null;
  },
  debug: false, // this would prevent logs
};

// import express form 'express';
const express = require("express");

// server here is a GraphQL Yoga server
server.express.use("/images", express.static("images/")); // ✔️

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
