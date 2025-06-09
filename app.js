import express from "express";
import dotenv from "dotenv/config";
import { unknown } from "./utils/middlewares/unknownCommand/unknown.js";
import { commands } from "./utils/commands/index.js";

// const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const [, , cmdName, ...args] = process.argv;

const displayCommand = commands[cmdName] ?? (() => unknown({ name: cmdName }));

displayCommand(...args);
