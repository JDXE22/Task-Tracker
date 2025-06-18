import test, { beforeEach, after, describe, before } from "node:test";
import assert from "node:assert/strict";
import { writeFileSync } from "fs";
import {
  addTask,
  deleteTask,
  listCommands,
  updateTask,
} from "../utils/commands/commandsControllers.js";
import { initialTasks, read, TASK_FILE } from "./helper/taskHelper.js";

before(() => {
  writeFileSync(TASK_FILE, JSON.stringify([initialTasks], null, 2));
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

describe("A task is updated and returned", () => {
  test("updateTask updates a task and returns it", () => {
    const updatedTask = {
      id: 1,
      description: "buy some milk",
    };

    const result = updateTask(updatedTask.id, updatedTask.description);
    assert.equal(result.description, updatedTask.description);
  });
});

describe("A Task is deleted", () => {
  test("A message is returned when the task is deleted successfully", () => {
    const id = 1;
    const taskToDelete = deleteTask(id);

    assert.equal(
      taskToDelete,
      `Task with ID ${id} has been removed successfully.`
    );
  });
});

after(() => {
  console.log("Test cleanup complete. tasks.json has been reset.");
});
