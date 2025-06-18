import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export const initialTasks = [
  {
    id: 1,
    description: "write tests",
    status: null,
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },

  {
    id: 2,
    description: "review code",
    status: "in-progress",
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: 3,
    description: "deploy application",
    status: "done",
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: 4,
    description: "update documentation",
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
];

export const TASK_FILE = resolve(process.cwd(), "tasks.json");

export const read = () => JSON.parse(readFileSync(TASK_FILE, "utf-8"));
