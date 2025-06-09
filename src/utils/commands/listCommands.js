import { errorMiddleware } from "../middlewares/error/errors.js";
import { getTasks } from "../services/tasksServices.js";

export const listCommands = () => {
  try {
    getTasks();
  } catch (error) {
    errorMiddleware(error);
  }
};
