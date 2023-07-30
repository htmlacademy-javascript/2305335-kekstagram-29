import {isEscapeKey} from './utils.js';
import {COMMENTS_PER_PORTION} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const commentsShownCount = bigPicture.querySelector('.comments-shown-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const comment = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsShown = 0;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const copyComment = comment.cloneNode (true);
  copyComment.querySelector('.social__picture').src = avatar;
  copyComment.querySelector('.social__picture').alt = name;
  copyComment.querySelector('.social__text').textContent = message;

  return (copyComment);
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const newComment = createComment(comments[i]);
    fragment.append(newComment);
  }

  commentList.innerHTML = '';
  commentList.append (fragment);
  commentsShownCount.textContent = commentsShown;
  commentsCount.textContent = comments.length;
};

const resetComments = () => {
  commentsShown = 0;
  comments = [];
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
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
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(data);
  renderComments(data.comments);
  comments = data.comments;

  if (comments.length > 0) {
    renderComments();
  }
};

cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};

