export default (date) => {
    const date_element=document.createElement('li');
    date_element.classList.add("date");
    date_element.innerHTML = date;
    return date_element;
}