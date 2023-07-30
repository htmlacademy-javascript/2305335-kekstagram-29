import {isEscapeKey} from './utils.js';
import {pristine} from './form-validation.js';
import {resetScale, addListenersToScaleButton, removeListenersToScaleButton} from './scale.js';
import {addEffectListener,removeEffectListener,resetEffects} from'./filters.js';
import {sendData} from './api.js';
import {createSuccessMessage} from './message.js';
import {SubmitButtonText} from './data.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = body.querySelector('#upload-file');
const uploadOverlay = body.querySelector('.img-upload__overlay');
const uploadModalCancel = body.querySelector('.img-upload__cancel');
const buttonUploadImgSubmit = document.querySelector('.img-upload__submit');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const onWindowKeyDown = (evt) => {
  if (isEscapeKey(evt) && (!evt.target.closest('.img-upload__field-wrapper'))) {
    evt.preventDefault();
    closeUploadModal();
  }
};

const onUploadModalCancelClick = () => closeUploadModal();

function closeUploadModal () {
  uploadForm.reset();
  pristine.reset();
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onWindowKeyDown);
  uploadModalCancel.removeEventListener('click', onUploadModalCancelClick);
  removeListenersToScaleButton();
  removeEffectListener();
  resetEffects();
  resetScale();
}

function openUploadModal () {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onWindowKeyDown);
  uploadModalCancel.addEventListener('click',onUploadModalCancelClick);
  addListenersToScaleButton();
  addEffectListener();
}

const onUploadModalClick = () => openUploadModal();
uploadFile.addEventListener('change', onUploadModalClick);

const blockSubmitButton = () => {
  buttonUploadImgSubmit.disabled = true;
};

const unblockSubmitButton = () => {
  buttonUploadImgSubmit.disabled = false;
};

const startSendingData = () => {
  blockSubmitButton();
  buttonUploadImgSubmit.textContent = SubmitButtonText.SENDING;
  textHashtags.readOnly = true;
  textDescription.readOnly = true;
};

const EndSendingData = () => {
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
