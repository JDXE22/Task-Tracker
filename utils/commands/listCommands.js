import tasks from "../../tasks.json" assert { type: "json" };

export const listCommands = (req, res, next) => {
    console.table(tasks);
}
