import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const GalleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', GalleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(
  ({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__item"
        href='${original}'>
        <img class='gallery__image'
            src='${preview}' 
            data-source='${original}'
            alt='${description}'/>
      </a>
    </div>
        `;
    })
    .join("");
}

// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(item => {
//    gallery.classList.add('gallery__item');
//    const galleryLink = document.createElement('a');
//    galleryLink.classList.add('gallery__link');
//    const imgEl = document.createElement('img');
//    imgEl.classList.add('gallery__image');
//    imgEl.src = item.preview;
//    imgEl.dataset.source = item.original;
//    imgEl.alt = item.description;


//    galleryLink.append(imgEl);
//    items.push(galleryLink);
// })
// gallery.append(...items); 

gallery.addEventListener('click', onImageClick)
    
function onImageClick(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') {
    return;

} 
    const instance = basicLightbox.create (
 `<img src = "${e.target.dataset.source}" width="800" height="600">`, {
          onShow: (instance) => {
            document.addEventListener("keydown", onEscapeButton);
          },
          onClose: (instance) => {
            document.removeEventListener("keydown", onEscapeButton);
          },
        });
      instance.show();
      
      
      function onEscapeButton(evt) {
        if (evt.key === "Escape") {
          instance.close();
        }
      }
}