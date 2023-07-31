import {displayTasks} from "./readTasks.js";

const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",remove_task);
    return i;
}
const remove_task = (event) => {
    console.log("Se elimina la tarea");
    const parent = event.target.parentElement;
    const li_childrens=parent.childNodes; //Obtenemos la lista de hijos dentro del item <li>
    
    parent.remove();

    const taskList = JSON.parse(localStorage.getItem("tasks")); //Obtenemos la lista para actualizarla
    const taskListActualizado = taskList.filter((task) => task.value != li_childrens[0].textContent);
    localStorage.setItem("tasks",JSON.stringify(taskListActualizado));

    /*Actualizamos la vista también*/
    displayTasks();
}

export default deleteIcon;