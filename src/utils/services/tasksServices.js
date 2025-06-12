import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { statuses } from "../commands/index.js";

const filePath = resolve(process.cwd(), "tasks.json");
const tasks = JSON.parse(readFileSync(filePath, "utf-8"));

export const getTasks = (status) => {
  if (status) {
    listTaskByStatus(status)
    console.log(`Tasks with status "${status}":`);
    
  }
  
  for (const task of tasks) {
    console.log(
      ` ${task.description} (ID: ${task.id}) - Status: ${
        task.status
      } - Created At: ${task.createdAt} - Updated At: ${
        task.updatedAt || "Not updated yet"
      }`
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
  const filteredTasks = tasks.filter((task) => task.status === status);

  return filteredTasks.map((task) => ({
    id: task.id,
    description: task.description,
    status: task.status,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt || "Not updated yet",
  }));


}
