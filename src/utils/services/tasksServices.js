import tasks from "../../../tasks.json" with { type: "json" };

export const getTasks = () => {
  tasks.forEach((task) => {
    console.log(`- ${task.name}: ${task.description}`);
  });

  // for (const task of tasks) {
  // console.log(`- ${task.name}: ${task.description}`);}
  
};

export const addTask = (task) => {

  tasks.push(task)
  return {message: "Task added successfully", ID: task.id};
}
