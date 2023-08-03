import {SCALE_STEP, SCALE_MIN, SCALE_MAX, SCALE_DEFAULT} from './data.js';

const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

const scaleImage = (currentScale) => {
  scaleValueElement.value = `${currentScale}%`;
  imagePreviewElement.style.transform = `scale(${currentScale / SCALE_MAX})`;
};

const onSmallerButtonClick = () => {
  const currentScale = parseInt(scaleValueElement.value, 10);
  const newValue = currentScale - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    scaleImage(SCALE_MIN);
  } else {
    scaleImage(newValue);
  }
};

const onBiggerButtonClick = () => {
  const currentScale = parseInt(scaleValueElement.value, 10);
  const newValue = currentScale + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    scaleImage(SCALE_MAX);
  } else {
    scaleImage(newValue);
  }
};

const resetScale = () => scaleImage(SCALE_DEFAULT);

const addListenersToScaleButton = () => {
  smallerButtonElement.addEventListener('click', onSmallerButtonClick);
  biggerButtonElement.addEventListener('click', onBiggerButtonClick);
};

const removeListenersToScaleButton = () => {
  smallerButtonElement.removeEventListener('click', onSmallerButtonClick);
  biggerButtonElement.removeEventListener('click', onBiggerButtonClick);
};

export {resetScale, addListenersToScaleButton, removeListenersToScaleButton};
