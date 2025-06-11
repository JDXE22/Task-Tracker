import { errorMiddleware } from "../middlewares/error/errors";

export const addTask = (task) => {
  try {
    addTask(task);
    console.log(`Task created: ${task}`);
  } catch (error) {
    errorMiddleware(error);
  }
};
