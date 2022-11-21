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
        <a class="gallery__item"
        href="${original}">
        <img class="gallery__image"
            src='${preview}' 
            alt='${description}'/>
        </a>
        `;
    })
    .join("");
}

const lightBox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});


// // const gallery = document.querySelector('.gallery')
// // const items = []

// // galleryItems.forEach(item => {

// //    const galleryLink = document.createElement('a');
// //    galleryLink.classList.add('gallery__item');
   
// //    const imgEl = document.createElement('img');
// //    imgEl.classList.add('gallery__image');
// //    imgEl.src = item.preview;
// //    imgEl.alt = item.description;
// //    imgEl.href = item.original;


// //    galleryLink.append(imgEl);
// //    items.push(galleryLink);
// // })
// // gallery.append(...items); 

//   new SimpleLightbox('.gallery a', {
//     captionDelay: 250,
//     captionsData: 'alt',
//   });

