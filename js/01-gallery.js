import { galleryItems } from "./gallery-items.js";
// Change code below this line

// =========== Создание и рендер разметки по массиву данных =========== //

const galleryBox = document.querySelector(".gallery");
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);

// galleryBox.insertAdjacentHTML("beforeend", itemsMarkup);

galleryBox.addEventListener("click", onGalleryBoxClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", itemsMarkup);

// Реализация делегирования на div.gallery и
// получение url большого изображения.

function onGalleryBoxClick(event) {
  // Запрещаем обновление страницы при клике
  event.preventDefault();

  // Если кликнули не по картинке, выходим
  const isImageGalary = event.target.nodeName;

  if (isImageGalary !== "IMG") {
    return;
  }

  // Получаем ссылку на оригинальное изображение
  const originalImgLink = event.target.dataset.source;

  // Показываем Lightbox
  const instance = basicLightbox.create(`
    <img src="${originalImgLink}" width="800" height="600">
`);

  instance.show();

  // Закрываем Lightbox при нажатии клавиши Escape

  // instance.close(() => console.log("lightbox not visible anymore"));
}
