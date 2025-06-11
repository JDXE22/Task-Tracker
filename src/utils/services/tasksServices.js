import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const filePath = resolve(process.cwd(), "tasks.json");
const tasks = JSON.parse(readFileSync(filePath, "utf-8"));

export const getTasks = () => {
  tasks.forEach((task) => {
    console.log(`- ${task}`);
  });

  // for (const task of tasks) {
  // console.log(`- ${task.name}: ${task.description}`);}
};

export const saveTasks = (task) => {
  writeFileSync(filePath, JSON.stringify(task, null, 2), "utf-8");
  console.log("Tasks saved successfully.");
};

export const addTaskService = (task) => {
  tasks.push(task);
  saveTasks(tasks);

  return task;
};
