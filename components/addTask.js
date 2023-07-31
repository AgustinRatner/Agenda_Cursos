import check_completed from "./CheckCompleted.js";
import deleteIcon from "./deleteIcon.js";
import {displayTasks} from "./readTasks.js";

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

//En caso que no ingresen nada, no se agregan las tareas
if(value=='' || date=='')
{
    return;
}
const taskObj={
    value,
    dateFormat,
    complete: false,
    id: uuid.v4()
};


const tasks_list= JSON.parse(localStorage.getItem("tasks")) || []; /*Si no hay nada guardado todavia, entonces inicializamos lista*/
    tasks_list.push(taskObj);
    localStorage.setItem("tasks",JSON.stringify(tasks_list));
    
    displayTasks();
}

export const createTask_add = ({value,dateFormat,complete,id}) => {

const task=document.createElement('li');
    task.classList.add('card');

const check=check_completed(id);
    /*Aca copiamos parte de lo que tenemos en CheckCompleted porque queremos que sin importar si hacemos click en "checked",
    si previo a recargar la página marcamos alguna tarea, que luego de recargarla siga apareciendo marcada; Esto lo hace posible 
    el siguiente condicional que tiene en cuenta el campo "complete" del objeto task, que forma parte de taskList en localstorage*/
    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

const taskContent=document.createElement('div');
const titleTask=document.createElement('span');
const dateElement=document.createElement('span');

titleTask.classList.add("task");
titleTask.innerHTML = value;
taskContent.appendChild(check);
taskContent.appendChild(titleTask);
dateElement.innerHTML=dateFormat;

task.appendChild(taskContent);
task.appendChild(dateElement);
task.appendChild(deleteIcon());

return task;
}
