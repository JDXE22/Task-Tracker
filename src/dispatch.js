import { commands } from "./utils/commands/index.js";
import { unknown } from "./utils/middlewares/unknownCommand/unknown.js";

export const dispatch = ([cmd, ...args]) => {
  const command = commands[cmd] ?? (() => unknown({ name: cmd }));
  return command(...args);
};
