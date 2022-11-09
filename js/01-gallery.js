import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// створюю розмітку для галереї

function createGallery({preview, original, description}){
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width = "380"
    />
  </a>
</div>`
}

gallery.addEventListener('click', onImgClick)

const createGalleryList = galleryItems.map(createGallery).join('');

gallery.insertAdjacentHTML('afterbegin', createGalleryList);


function onImgClick(el){
    // відміняю перезагрузку сторінки
    el.preventDefault();

    // якщо я клікаю не на картинку, то тоді виходимо
    if (el.target.nodeName !== 'IMG') {
        return;
      }

// в інакшому разі відкриваю модалку з прикладів бібліотеки basicLightbox.
const instance = basicLightbox.create(
    `<img src="${el.target.dataset.source}" width="1280" alt="${el.target.alt}">`
  );
  instance.show();

//   закриття через esc
  function onEscKey(e) {
    if (e.key === 'Escape') {
      instance.close(instance);
    }
  }

  window.addEventListener('keydown', onEscKey);

}
