const check_completed = (id) => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", (event) => complete_task(event,id));
    return i;
}

/*Hay una propiedad que es "toggle", que segun si el elemento tiene una clase o no, la agrega o elimina. Si la tiene la elimina,
de lo contrario le agrega la clase. Entonces al seleccionar la primera vez se marca, la segunda se desmarca.*/
const complete_task = (event,id) => {
    const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('completeIcon');
        element.classList.toggle('far');
        const tasks=JSON.parse(localStorage.getItem("tasks"));
        const index = tasks.findIndex(item => item.id == id);
        tasks[index].complete = !tasks[index].complete;
        localStorage.setItem("tasks",JSON.stringify(tasks));
}

export default check_completed;