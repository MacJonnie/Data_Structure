// // TASK MANAGER

// // create an interface for the instance of a task.

// interface Task {
//     id: number
//     title: string
//     priority: number
// }


// class TaskManaager {
//     private tasks: Task[] = [];

//     // Add Task
//     public addTask(id: number, title: string, priority: number ): void{
//         // 1. Define a new task to be added
//         const newTask: Task = {id, title, priority};
//         // 2. Action that adds the new task
//         this.tasks.push(newTask);
//         console.log(`Added: '${title}'`)
//     }

//     // Using Big 0(n)
//     public SlowSerachByID(targetID: number): Task | null{
//         for(let i = 0; this.tasks.length; i++ ){
//             if(this.tasks[i].id === targetID ){
//                 return this.tasks[i];
//             } // return the task if found after iteration
//         }
//         return null // return null if the task was not found
//     }

//     // Using Big 0(log n)
//     public FastSearchByID(targetID: number): Task | null {
//         this.tasks.sort((a, b) => a.id - b.id)

//         let left = 0
//         let right = this.tasks.length -1

//         while (left <= right) {
//             let mid = Math.floor((left + right)/2) // getting the average
//             let currentTask = this.tasks[mid]

//             if (currentTask.id === targetID){
//                 return currentTask; // The task has been found
//             } else if (currentTask.id < targetID){
//                 left = mid + 1  // Throwing away the left side
//             } else {
//                 right = mid -1 // Throwing away the right side
//             }

//         }

//         return null;
//     }

//     // Sort by priority method - Using Big 0(n squared)
//     public slowSortByPriority(): void {
//         this.tasks.sort((a, b) => a.priority - b.priority)
//     }

//     public printTask(): void {
//         console.log("\n=== Current Task List ===")
//         this.tasks.forEach(t => console.log(`[ID: ${t.id}] ${t.title} - Priority: ${t.priority}`))
//         console.log("=================\n")
//     }
// }


// const manager = new TaskManaager();

// manager.addTask(1, "Watch world cup", 3)
// manager.addTask(10, "Watch Netflix", 2)
// manager.addTask(467, "Read", 1)
// manager.addTask(122, "Go for HatchDev", 3)
// manager.addTask(102, "Play Chess", 2)
// manager.addTask(419, "Wash the Dishes", 2)
// manager.addTask(67, "Buy Coffee", 3)
// manager.addTask(69, "Attend Meeting by 5pm", 3)
// manager.addTask(300, "Attend Math Class by 3pm", 3)


// manager.printTask()

// // Fast SEARCH
// console.log("Searching for ID: 410");
// const foundTask = manager.FastSearchByID(419);
// console.log("Result found:", foundTask)


// // SORTING
// console.log("\n Sorting task by the highest priority")
// manager.slowSortByPriority()
// manager.printTask()