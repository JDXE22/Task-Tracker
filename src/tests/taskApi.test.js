import test, { beforeEach, after, describe } from "node:test";
import assert from "node:assert/strict";
import { resolve } from "path";
import { writeFileSync, readFileSync } from "fs";
import {
  addTask,
  listCommands,
} from "../utils/commands/commandsControllers.js";

const TASK_FILE = resolve(process.cwd(), "tasks.json");

const read = () => JSON.parse(readFileSync(TASK_FILE, "utf-8"));

beforeEach(() => {
  writeFileSync(
    TASK_FILE,
    JSON.stringify(
      [
        {
          id: 1,
          description: "write tests",
          status: null,
          createdAt: new Date().toISOString(),
          updatedAt: null,
        },
      ],
      null,
      2
    )
  );
});

describe("addTask creates a new task and returns it", () => {
  const newTask = "write tests";
  const result = addTask(newTask);
  assert.equal(result.description, newTask);

  const allTasks = read();
  assert.equal(allTasks.length, 1);
});

describe("get all the task", () => {
  test("return all tasks no matter the status", () => {
    const result = listCommands();
    const allTasks = read();

    assert.strictEqual(result.length, allTasks.length);
  });
});

after(() => {
  writeFileSync(TASK_FILE, JSON.stringify([], null, 2));

  console.log("Test cleanup complete. tasks.json has been reset.");
});
