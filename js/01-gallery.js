import { galleryItems } from "./gallery-items.js";
// Change code below this line

// =========== Создание и рендер разметки по массиву данных =========== //

const galleryBox = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", itemsMarkup);

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

// Реализация делегирования на div.gallery и
// получение url большого изображения.

function onGalleryBoxClick(event) {
  event.preventDefault();

  const isImageGalary = event.target.classList.contains("gallery__image");

  if (!isImageGalary) {
    return;
  }
  console.log(event.target);

  console.log(event.target.dataset.source);
}
