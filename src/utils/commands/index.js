import { addTaskService } from "../services/tasksServices.js";
import { removeTask } from "./deleteTask.js";
import { listCommands } from "./listCommands.js";

export const commands = {
    list: listCommands,
    add: addTaskService,
    delete: removeTask
}