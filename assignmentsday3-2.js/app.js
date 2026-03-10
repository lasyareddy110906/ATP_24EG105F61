// app.js

import { addTask, getAllTasks, completeTask } from "./task.js";

console.log("=== Todo App ===");

// 1. Add some tasks
console.log(addTask("Finish assignment", "high", "2026-04-01"));
console.log(addTask("Buy groceries", "medium", "2026-03-20"));
console.log(addTask("Workout", "low", "2026-03-15"));

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting Task 1");
console.log(completeTask(1));

// 4. Display all tasks again
console.log("\nUpdated Tasks:");
console.log(getAllTasks());