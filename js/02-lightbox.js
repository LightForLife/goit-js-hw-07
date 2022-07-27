import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Ссылка на ul.gallery
const galleryList = document.querySelector(".gallery");

// Создаем разметку для изображений
const galleryItem = makeItemsMarkup(galleryItems);

function makeItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    })
    .join("");
}

// Добавляем изображение в ul.gallery
galleryList.insertAdjacentHTML("beforeend", galleryItem);

// Подключаем библиотеку SimpleLightbox
const gallery = new SimpleLightbox(".gallery a", {
  // Добавляем подпись с атрибута alt
  captionsData: "alt",
  // Подпись появляется через 250ms
  captionDelay: "250",
});
