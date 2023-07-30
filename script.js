const btnAdd = document.querySelector('[data-form-btn]');

const createTask_add = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  console.log(input.value);
  input.value='';
}

btnAdd.addEventListener("click",createTask_add);
