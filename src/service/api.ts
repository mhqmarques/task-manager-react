import { Task } from "../@types/Task";

export const listAll = ():Task[] => {
  const tasks = localStorage['Tasks']
  return tasks ? JSON.parse(tasks) : []
}

export const create = (task: Task): void => {
  const tasks: Task[] = listAll();
  tasks.push(task);
  localStorage['Tasks'] = JSON.stringify(tasks);
}

export const updateStatus = (id: number): void => {
  const tasks = listAll();
  tasks.forEach((task, i, arr) => {
    if(task.id === id) {
      arr[i].done = !task.done;
    }
  })
  localStorage['Tasks'] = JSON.stringify(tasks)
}