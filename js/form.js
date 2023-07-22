import {isEscapeKey} from './utils.js';
import {pristine} from './form-validation.js';
import { resetScale, addListenersToScaleButton, removeListenersToScaleButton } from './scale.js';
import {addEffectListener,removeEffectListener,resetEffects} from'./filters.js';

const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = bodyElement.querySelector('#upload-file');
const uploadOverlay = bodyElement.querySelector('.img-upload__overlay');
const uploadModalCancel = bodyElement.querySelector('.img-upload__cancel');

const onWindowKeyDown = (evt) => {
  if (isEscapeKey(evt) && (!evt.target.closest('.img-upload__field-wrapper'))) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const onUploadModalCancelClick = () => closeUploadModal();

function openUploadModal () {
  bodyElement.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onWindowKeyDown);
  uploadModalCancel.addEventListener('click',onUploadModalCancelClick);
  addListenersToScaleButton();
  addEffectListener();
}

function closeUploadModal () {
  uploadForm.reset();
  pristine.reset();
  resetScale();
  bodyElement.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onWindowKeyDown);
  uploadModalCancel.removeEventListener('click', onUploadModalCancelClick);
  removeListenersToScaleButton();
  removeEffectListener();
  resetEffects();
}

const renderModalForm = () => {
  uploadFile.addEventListener('change', openUploadModal);
};

uploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export { renderModalForm };
