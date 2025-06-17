import test, { beforeEach, after, describe } from "node:test";
import assert from "node:assert/strict";
import { writeFileSync } from "fs";
import {
  addTask,
  listCommands,
  updateTask,
} from "../utils/commands/commandsControllers.js";
import { initialTasks, read, TASK_FILE } from "./helper/taskHelper.js";

beforeEach(() => {
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

describe("A task is updated and returned" , () => {
  test("updateTask updates a task and returns it", ()=> {

    const updatedTask = {
      id: 1,
      description: "buy some milk"
    }

    const result = updateTask(updatedTask.id, updatedTask.description)
    assert.equal(result.description, updatedTask.description);
  })
})



after(() => {
  writeFileSync(TASK_FILE, JSON.stringify([], null, 2));

  console.log("Test cleanup complete. tasks.json has been reset.");
});
