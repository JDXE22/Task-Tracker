import { addTask, listCommands, removeTask } from "./commandsControllers.js";

export const commands = {
  list: listCommands,
  add: addTask,
  delete: removeTask,
};
