import {generateGalleryMarkup, renderMarkup} from './render-functions'

const API_KEY = "43312683-2385dcaf90e6cbdc78ebf8a65";
//функция которая получает картинки из базы данных
export function getImages (query) { 
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}`).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }

    return response.json();
}).then((data) => {return generateGalleryMarkup(data.hits)}).then(markup => {
    renderMarkup(markup)
})
}
