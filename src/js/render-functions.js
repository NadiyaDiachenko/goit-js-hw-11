const gallery = document.querySelector(".gallery");

// рисуем картинки из сайта
export function generateGalleryMarkup(arrImg){
return arrImg.map((card) => {
    return `<li>
    <img src="${card.webformatURL}" alt="card" />
    </li>`
}).join(' ')
}

export function renderMarkup(markup) {
    gallery.innerHTML = markup
}


// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
