import {generateGalleryMarkup, renderMarkup} from './render-functions'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'

const API_KEY = "43312683-2385dcaf90e6cbdc78ebf8a65";
//функция которая получает картинки из базы данных
export function getImages (query) { 
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }

    return response.json();
}).then(({total, hits}) => {
    if(total === 0){
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            color: `red`
        });
    }
    // генерирует(готовит) разметку
    return generateGalleryMarkup(hits)}).then(markup => {
        const spinner = document.querySelector('.lds-ring');
        spinner.remove()
    // подставляет разметку

    renderMarkup(markup)
    
    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });

    lightbox.refresh()
})
}
