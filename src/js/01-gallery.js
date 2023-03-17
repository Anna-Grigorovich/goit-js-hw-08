// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this linen
const galleryContainer = document.querySelector('.gallery');
const markupGallery = createMarkup(galleryItems);

function createMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>
      `;
    })
    .join('');
}

galleryContainer.innerHTML = markupGallery;

const lightbox = new SimpleLightbox('.gallery li a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
