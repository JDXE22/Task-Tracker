import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { statuses } from "../commands/constants/status.js";
 
const filePath = resolve(process.cwd(), "tasks.json");
const tasks = JSON.parse(readFileSync(filePath, "utf-8"));

export const getTasks = (status) => {
  const toShowTasks = listTaskByStatus(status);

  console.log(`Tasks ${status ? `with status "${status}"` : ""}:`);

  for (const task of toShowTasks) {
    console.log(
      ` 
      ID: ${task.id}
      Description: ${task.description} 
      Status: ${task.status || "todo"}
      Created At: ${task.createdAt} 
      Updated At: ${task.updatedAt || "N/A"}`
    );
  }
};

export const saveTasks = (task) => {
  writeFileSync(filePath, JSON.stringify(task, null, 2), "utf-8");
};

export const addTaskService = (task) => {
  const newTask = {
    id: tasks.length + 1,
    description: task,
    status: null,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`Task added successfully. (ID: ${newTask.id})`);
};

export const deleteTaskService = (id) => {
  const idNumber = Number(id);

  const taskIndex = tasks.findIndex((task) => task.id === idNumber);

  const [removedTask] = tasks.splice(taskIndex, 1);

  saveTasks(tasks);

  console.log(`✔ Removed task id=${idNumber}`);
};

export const updateTaskService = (id, updatedTask) => {
  const idNumber = Number(id);
  const taskIndex = tasks.findIndex((task) => task.id === idNumber);

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    description: updatedTask,
    updatedAt: new Date().toISOString(),
  };

  saveTasks(tasks);
  console.log(`✔ Task has been updated successfully`);
};

export const markTaskAsService = (id, status) => {
  const idNumber = Number(id);
  const taskIndex = tasks.findIndex((task) => task.id === idNumber);

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    status: statuses.includes(status) ? status : "todo",
  };
  saveTasks(tasks);
  console.log(`✔ Task id=${idNumber} marked as ${status}`);
};

const listTaskByStatus = (status) => {
  return tasks.filter((task) => !status || task.status === status);
};
