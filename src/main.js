import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from './js/pixabay-api'

const form = document.querySelector("form");

function handleSubmit(event) {
    event.preventDefault()
    const query = form.elements.card.value;
    getImages(query)
}

form.addEventListener("submit", handleSubmit)


