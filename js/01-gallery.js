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
  const instance = basicLightbox.create(
    `
      <img src="${originalImgLink}" width="800" height="600">
  `,
    {
      // При открытии вешаем слушатель
      onShow: () => {
        window.addEventListener("keydown", onKeyPressEscape);
      },
      // При закрытии снимаем слушатель
      onClose: () => {
        window.removeEventListener("keydown", onKeyPressEscape);
      },
    }
  );

  instance.show();

  // Закрываем Lightbox при нажатии клавиши Escape

  function onKeyPressEscape(event) {
    const ESC_KEY_CODE = "Escape";

    if (event.code === ESC_KEY_CODE) instance.close();
  }
}
