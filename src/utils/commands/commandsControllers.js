import { errorMiddleware } from "../middlewares/error/errors.js";
import {
  deleteTaskService,
  updateTaskService,
} from "../services/tasksServices.js";
import { getTasks } from "../services/tasksServices.js";
import { addTaskService } from "../services/tasksServices.js";

export const listCommands = () => {
  try {
    getTasks();
  } catch (error) {
    errorMiddleware(error);
  }
};

export const removeTask = (id) => {
  try {
    deleteTaskService(id);
  } catch (error) {
    errorMiddleware(error);
  }
};

export const addTask = (task) => {
  try {
    const saved = addTaskService(task);
    return saved;
  } catch (error) {
    errorMiddleware(error);
  }
};

export const updateTask = (id, task) => {
  try {
    const updatedTask = updateTaskService(id, task);
    return updatedTask;
  } catch (error) {
    errorMiddleware(error);
  }
};
