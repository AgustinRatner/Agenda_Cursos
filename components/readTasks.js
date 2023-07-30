import { createTask_add } from "./addTask.js";

export const read_Tasks = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list=document.querySelector('[data-list]');

    taskList.forEach((task) => {
        list.appendChild(createTask_add(task));
    });
}