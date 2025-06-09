import { commands } from "./utils/commands.js";
import { unknown } from "./utils/middlewares/unknownCommand/unknown.js";

export const dispatch = ([cmd, ...args]) => {
    const command = commands[cmd] ?? (() => unknown({ name: cmd }));
    return command(...args);
}

