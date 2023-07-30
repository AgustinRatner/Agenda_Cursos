import check_completed from "./CheckCompleted.js";
import deleteIcon from "./deleteIcon.js";

export const add_task = (evento) => {

evento.preventDefault();
const list=document.querySelector('[data-list]');
const input = document.querySelector('[data-form-input]');
const calendar=document.querySelector("[data-form-date]");

const value=input.value;
const date=calendar.value;
const dateFormat=moment(date).format('DD/MM/YYYY');

input.value='';
calendar.value="";

const taskObj={
    value,
    dateFormat
};

const tasks_list= JSON.parse(localStorage.getItem("tasks")) || []; /*Si no hay nada guardado todavia, entonces inicializamos lista*/
    tasks_list.push(taskObj);
    localStorage.setItem("tasks",JSON.stringify(tasks_list));

const task = createTask_add(taskObj);
    list.appendChild(task);
}

export const createTask_add = ({value,dateFormat}) => {

const task=document.createElement('li');
    task.classList.add('card');

const taskContent=document.createElement('div');
const titleTask=document.createElement('span');
const dateElement=document.createElement('span');

titleTask.classList.add("task");
titleTask.innerHTML = value;
taskContent.appendChild(check_completed());
taskContent.appendChild(titleTask);
dateElement.innerHTML=dateFormat;

task.appendChild(taskContent);
task.appendChild(dateElement);
task.appendChild(deleteIcon());

return task;
}
