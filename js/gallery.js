import {showBigPicture} from './big-picture.js';
import {renderPictures} from './thumbnails.js';

const containerElement = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest ('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }
  evt.preventDefault();
  const picture = pictures.find (
    (item) => item.id === +thumbnail.dataset.thumbnailId
  );
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderPictures (pictures, containerElement);
  containerElement.addEventListener ('click', onContainerClick);
};

export {renderGallery};
