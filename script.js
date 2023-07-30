( () => {
const btnAdd = document.querySelector('[data-form-btn]');

const createTask_add = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const list=document.querySelector('[data-list]');
  const task=document.createElement('li');
  task.classList.add('card');

  const taskContent=document.createElement('div');
  taskContent.appendChild(check_completed());
  const titleTask=document.createElement('span');
  titleTask.classList.add("task");
  titleTask.innerHTML = input.value;
  taskContent.appendChild(titleTask);

  const content = 
  `${check_completed()}
    <span class="task">${input.value}</span>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;


  task.appendChild(taskContent);
  list.appendChild(task);
  input.value='';
}

const check_completed = () => {
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-check-square");
  i.classList.add("icon");

  i.addEventListener("click",complete_task);
  return i;
}

/*Hay una propiedad que es "toggle", que segun si el elemento tiene una clase o no, la agrega o elimina. Si la tiene la elimina,
de lo contrario le agrega la clase. Entonces al seleccionar la primera vez se marca, la segunda se desmarca.*/
const complete_task = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
}

btnAdd.addEventListener("click",createTask_add);

}) ();