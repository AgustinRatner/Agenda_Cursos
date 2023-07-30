import {add_task} from "./components/addTask.js";
import {read_Tasks} from "./components/readTasks.js";

const btnAdd = document.querySelector('[data-form-btn]');

btnAdd.addEventListener("click",add_task);
read_Tasks(); /*Apenas cargue la página, queremos que nos muestre las tareas que se encuentran en localStorage*/