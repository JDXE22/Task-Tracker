import { errorMiddleware } from "../middlewares/error/errors";
import { deleteTaskService } from "../services/tasksServices";

export const removeTask = (id) => {
  try {
    deleteTaskService(id);
  } catch (error) {
    errorMiddleware(error);
  }
};
