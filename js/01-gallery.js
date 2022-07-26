import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Создаем разметку для изображений

const galleryBox = document.querySelector(".gallery");

const itemsMarkup = createGalleryItemsMarkup(galleryItems);

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

// Добавляем изображение в div.gallery
galleryBox.insertAdjacentHTML("beforeend", itemsMarkup);

// Ставим слушатель на изображение
galleryBox.addEventListener("click", onGalleryBoxClick);

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

  // if (instance.show()) {
  //   console.log("fff");
  // }

  // Закрываем Lightbox при нажатии клавиши Escape
  // window.addEventListener("keydown", onKeypressEscape);

  if (instance.show()) {
    window.addEventListener("keydown", onKeypressEscape);
  }
  function onKeypressEscape(event) {
    const ESC_KEY_CODE = "Escape";
    console.log(event.key);

    if (event.code === ESC_KEY_CODE) instance.close();

    // if (event.code === ESC_KEY_CODE) instance.close();
  }
}
