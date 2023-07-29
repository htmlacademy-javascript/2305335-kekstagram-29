const thumbnailContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

function renderPictures (arr) {
  document.querySelectorAll('.picture').forEach((element)=>element.remove());
  const fragment = document.createDocumentFragment();
  arr.forEach(({url, description, likes, comments, id}) => {
    const createThumbnail = thumbnailTemplate.cloneNode(true);
    thumbnailContainer.appendChild(createThumbnail);
    createThumbnail.querySelector('.picture__img').src = url;
    createThumbnail.querySelector('.picture__img').alt = description;
    createThumbnail.querySelector('.picture__comments').textContent = comments.length;
    createThumbnail.querySelector('.picture__likes').textContent = likes;
    createThumbnail.dataset.thumbnailId = id;
  });

  thumbnailContainer.appendChild(fragment);
}

export {renderPictures};
