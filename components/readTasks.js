import {createTask_add} from "./addTask.js";
import dateElement from "./dateElement.js";
import {uniqueDates, orderDates} from "../services/date.js";

export const displayTasks = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list=document.querySelector('[data-list]');
    const dates=uniqueDates(taskList);
    orderDates(dates);

    list.innerHTML = ''; /*Inicializamos la lista como vacía, para que luego de leer la nueva tarea o remover alguna, 
                        se actualice*/

    dates.forEach((date) => {
        const dateMoment = moment(date,"DD/MM/YYYY");
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/YYYY");
            const diff=dateMoment.diff(taskDate);

            if(diff == 0)
            {
                list.appendChild(createTask_add(task));
            }
        });
    });
    
}