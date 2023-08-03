import {isEscapeKey} from './utils.js';
import {COMMENTS_PER_PORTION} from './data.js';

const bigPictureElement = document.querySelector('.big-picture');
const commentsShownCountElement = bigPictureElement.querySelector('.comments-shown-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsShown = 0;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const copyComment = commentElement.cloneNode (true);
  copyComment.querySelector('.social__picture').src = avatar;
  copyComment.querySelector('.social__picture').alt = name;
  copyComment.querySelector('.social__text').textContent = message;

  return (copyComment);
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const newComment = createComment(comments[i]);
    fragment.append(newComment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append (fragment);
  commentsShownCountElement.textContent = commentsShown;
  commentsCountElement.textContent = comments.length;
};

const resetComments = () => {
  commentsShown = 0;
  comments = [];
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetComments();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onCommentsLoaderClick = () => renderComments();

const renderPictureDetails = ({url, likes, description}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(data);
  renderComments(data.comments);
  comments = data.comments;

  if (comments.length > 0) {
    renderComments();
  }
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};

