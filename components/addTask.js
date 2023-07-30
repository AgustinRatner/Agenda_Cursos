const add_task = (evento) => {
    const list=document.querySelector('[data-list]');
    const task = createTask_add(evento);
    list.appendChild(task);
}

const tasks_list=[];

const createTask_add = (evento) => {
evento.preventDefault();
const input = document.querySelector('[data-form-input]');
const calendar=document.querySelector("[data-form-date]");
const value=input.value;
const date=calendar.value;
const dateFormat=moment(date).format('DD/MM/YYYY');

const taskObj={
    value,
    dateFormat
};

tasks_list.push(taskObj);
localStorage.setItem("tasks",JSON.stringify(tasks_list));

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
input.value='';

return task;
}

export default add_task;