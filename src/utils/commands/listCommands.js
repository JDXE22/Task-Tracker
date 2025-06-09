import tasks from "../../../tasks.json" with { type: "json" };

export const listCommands = () => {
  
  tasks.forEach((task) => {
    console.log(`- ${task.name}: ${task.description}`);
  });
  
};
