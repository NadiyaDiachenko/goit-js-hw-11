const gallery = document.querySelector(".gallery");

// рисуем картинки из сайта
export function generateGalleryMarkup(arrImg){
return arrImg.map(({webformatURL, likes, views, comments, downloads, largeImageURL, tags}) => {
    return `<li class="item-image">
    <a class="gallery-link" href="${largeImageURL}" download="false">
    <img class="image" src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}" width="360" />
    <ul class="list-content">
    <li class="item-content"><p class="type">Likes</p>
    <span class="quantity">${likes}</span></li>
    <li class="item-content"><p class="type">Views</p>
    <span class="quantity">${views}</span></li>
    <li class="item-content"><p class="type">Comments</p>
    <span class="quantity">${comments}</span></li>
    <li class="item-content"><p class="type">Downloads</p>
    <span class="quantity">${downloads}</span></li>
    </ul>
</a>
    </li>`
}).join(' ')
}


export function renderMarkup(markup) {
    gallery.innerHTML = markup
}
