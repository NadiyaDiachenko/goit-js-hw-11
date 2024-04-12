import { getImages } from './js/pixabay-api'



const form = document.querySelector("form");

function handleSubmit(event) {
    event.preventDefault()
    const query = form.elements.card.value;
    form.insertAdjacentHTML('afterend', '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>')
    getImages(query)
}

form.addEventListener("submit", handleSubmit)
