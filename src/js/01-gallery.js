import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(item => {
   gallery.classList.add('gallery__item');
   const galleryLink = document.createElement('a');
   galleryLink.classList.add('gallery__link');
   const imgEl = document.createElement('img');
   imgEl.classList.add('gallery__image');
   imgEl.src = item.preview;
   imgEl.dataset.source = item.original;
   imgEl.alt = item.description;


   galleryLink.append(imgEl);
   items.push(galleryLink);
})
gallery.append(...items)

gallery.addEventListener('click', onImageClick)
    
function onImageClick(e) {
    e.preventDefault();
    if(e.target.nodeName !== 'IMG') {
    return;
} 
    const instance = basicLightbox.create(
    `<img src = "${e.target.dataset.source}" width="1280" height="853">`
  );

  instance.show();

  gallery.addEventListener('onkeydown', onImageClick) 

  function onImageClick(e) {
  
    if (e.code === 'Close') {
      instance.close();
    }
    return gallery.removeEventListener;
  };
}


// console.log(galleryItems);