import { addTaskService } from "../services/tasksServices.js";
import { listCommands } from "./listCommands.js";

export const commands = {
    list: listCommands,
    add: addTaskService
}