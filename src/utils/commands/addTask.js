import { errorMiddleware } from "../middlewares/error/errors";
import { addTaskService } from "../services/tasksServices";

export const addTask = (task) => {
  try {
    const saved = addTaskService(task);
    console.log(`Task created: ${task}`);
    return saved;
  } catch (error) {
    errorMiddleware(error);
  }
};
