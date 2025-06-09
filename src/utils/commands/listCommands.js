import { getTasks } from "../services/tasksServices.js";

export const listCommands = ({ tasks }) => {
  return getTasks({ tasks: tasks });
};
