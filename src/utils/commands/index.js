import { addTask } from "../services/tasksServices.js";
import { listCommands } from "./listCommands.js";

export const commands = {
    list: listCommands,
    add: addTask
}