const deleteIcon = () => {
    const i = document.createElement('i');
    i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click",remove_task);
    return i;
}
const remove_task = (event) => {
    console.log("Se elimina la tarea");
    const parent = event.target.parentElement;
    parent.remove();
}

export default deleteIcon;