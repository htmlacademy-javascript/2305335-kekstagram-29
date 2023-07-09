import {getPictures} from './data.js';

const thumbnailContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPictures = getPictures();
const fragment = document.createDocumentFragment();

renderPictures.forEach(({url, description, likes, comments}) => {
  const createThumbnail = thumbnailTemplate.cloneNode(true);
  thumbnailContainer.appendChild(createThumbnail);
  createThumbnail.querySelector('.picture__img').src = url;
  createThumbnail.querySelector('.picture__img').alt = description;
  createThumbnail.querySelector('.picture__comments').textContent = comments.length;
  createThumbnail.querySelector('.picture__likes').textContent = likes;
});

thumbnailContainer.appendChild(fragment);

export {renderPictures};
