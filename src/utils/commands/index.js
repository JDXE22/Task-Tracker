import { addTask, listCommands, markTaskAs, removeTask, updateTask } from "./commandsControllers.js";

export const commands = {
  list: listCommands,
  add: addTask,
  delete: removeTask,
  update: updateTask,
  mark: markTaskAs,
};
