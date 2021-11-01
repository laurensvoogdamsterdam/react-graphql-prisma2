"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./env");
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = __importDefault(require("./schema"));
var context_1 = require("./context");
var server = new graphql_yoga_1.GraphQLServer({
    schema: schema_1.default,
    context: context_1.createContext,
});
// server.express.use(logger("dev"));
var PORT = process.env.PORT || 4000;
var options = {
    port: PORT,
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
    uploads: true,
    formatError: function (err) {
        return null;
    },
    debug: false, // this would prevent logs
};
// import express form 'express';
var express = require("express");
// server here is a GraphQL Yoga server
server.express.use("/images", express.static("images/")); // ✔️
server.start({ port: PORT }, function () {
    return console.log("\u2705 Server running on http://localhost:" + PORT);
});
