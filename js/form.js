import {isEscapeKey} from './utils.js';
import {pristine} from './form-validation.js';
import {resetScale, addListenersToScaleButton, removeListenersToScaleButton} from './scale.js';
import {addEffectListener,removeEffectListener,resetEffects} from'./filters.js';
import {sendData} from './api.js';
import {createSuccessMessage} from './message.js';

const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = bodyElement.querySelector('#upload-file');
const uploadOverlay = bodyElement.querySelector('.img-upload__overlay');
const uploadModalCancel = bodyElement.querySelector('.img-upload__cancel');
const buttonUploadImgSubmit = document.querySelector('.img-upload__submit');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

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

const blockSubmitButton = () => {
  buttonUploadImgSubmit.disabled = true;
};

const unblockSubmitButton = () => {
  buttonUploadImgSubmit.disabled = false;
};

uploadForm.addEventListener('change', () => {
  const isValid = pristine.validate();
  if (!isValid) {
    blockSubmitButton();
  } else {
    unblockSubmitButton();
  }
});

const startSendData = () => {
  blockSubmitButton();
  buttonUploadImgSubmit.textContent = SubmitButtonText.SENDING;
  textHashtags.readOnly = true;
  textDescription.readOnly = true;
};

const EndSendData = () => {
  unblockSubmitButton();
  buttonUploadImgSubmit.textContent = SubmitButtonText.IDLE;
  textHashtags.readOnly = false;
  textDescription.readOnly = false;
};

const setUserFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      startSendData();
      sendData(formData,()=>(closeUploadModal(),createSuccessMessage()))
        .catch(
          () => (createSuccessMessage(false))
        )
        .finally(EndSendData);
    }
  });
};

export {renderModalForm, setUserFormSubmit};
