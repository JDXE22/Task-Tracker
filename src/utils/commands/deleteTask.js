import { errorMiddleware } from "../middlewares/error/errors.js";
import { deleteTaskService } from "../services/tasksServices.js";

export const removeTask = (id) => {
  try {
    deleteTaskService(id);
  } catch (error) {
    errorMiddleware(error);
  }
};
