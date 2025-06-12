import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(process.cwd(), "tasks.json");
const tasks = JSON.parse(readFileSync(filePath, "utf-8"));

export const getTasks = () => {
  for (const task of tasks) {
    console.log(` ${task.description}`);
  }
};

export const saveTasks = (task) => {
  writeFileSync(filePath, JSON.stringify(task, null, 2), "utf-8");
};

export const addTaskService = (task) => {
  const newTask = {
    id: tasks.length + 1,
    description: task,
    status: task.status,
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
