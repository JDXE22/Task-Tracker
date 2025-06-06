import tasks from "../../tasks.json" with { type: "json" };

export const listCommands = (req, res, next) => {
    console.table(tasks);
}
