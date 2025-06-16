import test, { beforeEach, after, describe } from "node:test";
import assert from "node:assert/strict";
import { resolve } from "path";
import { writeFileSync, readFileSync } from "fs";
import { addTask } from "../utils/commands/commandsControllers.js";

const TASK_FILE = resolve(process.cwd(), "tasks.json");

const read = () => JSON.parse(readFileSync(TASK_FILE, "utf-8"));

beforeEach(() => {
  writeFileSync(
    TASK_FILE,
    JSON.stringify(
      [
        {
          id: 1,
          description: "foo",
          status: null,
          createdAt: "2020",
          updatedAt: null,
        },
      ],
      null,
      2
    )
  );
});

describe("addTask creates a new task and returns it", () => {
  const newTask = "write tests"
  const result = addTask(newTask)
  assert.equal(result, newTask)

  const allTasks = read();
  assert.equal(allTasks.length, 2);
});

after(() => {
  writeFileSync(TASK_FILE, JSON.stringify([], null, 2));

  console.log("Test cleanup complete. tasks.json has been reset.");
});
