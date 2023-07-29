const btnAdd = document.querySelector('[data-form-btn]');

btnAdd.addEventListener("click", (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  console.log(input.value);
})
