import { addTask, listCommands, markTaskAs, removeTask, updateTask } from "./commandsControllers.js";
import { statuses } from "./constants/status.js";

const markCommands = Object.fromEntries(
  statuses.map((status) => [
    `mark-${status}`,
    (id) => markTaskAs(id, status),
  ])
)

export const commands = {
  list: listCommands,
  add: addTask,
  delete: removeTask,
  update: updateTask,
  ...markCommands
};
