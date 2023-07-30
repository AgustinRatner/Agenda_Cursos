const check_completed = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
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

export default check_completed;