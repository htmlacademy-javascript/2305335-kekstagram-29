import {isEscapeKey} from './utils.js';
import {pristine} from './form-validation.js';
import {resetScale, addListenersToScaleButton, removeListenersToScaleButton} from './scale.js';
import {addEffectListener,removeEffectListener,resetEffects} from'./filters.js';
import {sendData} from './api.js';
import {createSuccessMessage} from './message.js';
import {SubmitButtonText} from './data.js';

const bodyElement = document.querySelector('body');
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadFileElement = bodyElement.querySelector('#upload-file');
const uploadOverlayElement = bodyElement.querySelector('.img-upload__overlay');
const uploadModalCancelElement = bodyElement.querySelector('.img-upload__cancel');
const buttonUploadImgSubmitElement = document.querySelector('.img-upload__submit');
const textHashtagsElement = document.querySelector('.text__hashtags');
const textDescriptionElement = document.querySelector('.text__description');

const onWindowKeyDown = (evt) => {
  if (isEscapeKey(evt) && (!evt.target.closest('.img-upload__field-wrapper'))) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const onUploadModalCancelClick = () => closeUploadModal();

function closeUploadModal () {
  uploadFormElement.reset();
  pristine.reset();
  bodyElement.classList.remove('modal-open');
  uploadOverlayElement.classList.add('hidden');
  document.removeEventListener('keydown', onWindowKeyDown);
  uploadModalCancelElement.removeEventListener('click', onUploadModalCancelClick);
  removeListenersToScaleButton();
  removeEffectListener();
  resetEffects();
  resetScale();
}

function openUploadModal () {
  bodyElement.classList.add('modal-open');
  uploadOverlayElement.classList.remove('hidden');
  document.addEventListener('keydown', onWindowKeyDown);
  uploadModalCancelElement.addEventListener('click',onUploadModalCancelClick);
  addListenersToScaleButton();
  addEffectListener();
}

const onUploadModalClick = () => openUploadModal();
uploadFileElement.addEventListener('change', onUploadModalClick);

const blockSubmitButton = () => {
  buttonUploadImgSubmitElement.disabled = true;
};

const unblockSubmitButton = () => {
  buttonUploadImgSubmitElement.disabled = false;
};

const startSendingData = () => {
  blockSubmitButton();
  buttonUploadImgSubmitElement.textContent = SubmitButtonText.SENDING;
  textHashtagsElement.readOnly = true;
  textDescriptionElement.readOnly = true;
};

const EndSendingData = () => {
  unblockSubmitButton();
  buttonUploadImgSubmitElement.textContent = SubmitButtonText.IDLE;
  textHashtagsElement.readOnly = false;
  textDescriptionElement.readOnly = false;
};

const setUserFormSubmit = () => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      startSendingData();
      sendData(formData).then(()=>(closeUploadModal(),createSuccessMessage()))
        .catch(
          () => (createSuccessMessage(false))
        )
        .finally(EndSendingData);
    }
  });
};

export {setUserFormSubmit};
