import {SCALE_STEP, SCALE_MIN, SCALE_MAX, SCALE_DEFAULT} from './data.js';

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (currentScale) => {
  scaleValue.value = `${currentScale}%`;
  imagePreview.style.transform = `scale(${currentScale / SCALE_MAX})`;
};

const onSmallerButtonClick = () => {
  const currentScale = parseInt(scaleValue.value, 10);
  const newValue = currentScale - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    scaleImage(SCALE_MIN);
  } else {
    scaleImage(newValue);
  }
};

const onBiggerButtonClick = () => {
  const currentScale = parseInt(scaleValue.value, 10);
  const newValue = currentScale + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    scaleImage(SCALE_MAX);
  } else {
    scaleImage(newValue);
  }
};

const resetScale = () => scaleImage(SCALE_DEFAULT);

const addListenersToScaleButton = () => {
  smallerButton.addEventListener('click', onSmallerButtonClick);
  biggerButton.addEventListener('click', onBiggerButtonClick);
};

const removeListenersToScaleButton = () => {
  smallerButton.removeEventListener('click', onSmallerButtonClick);
  biggerButton.removeEventListener('click', onBiggerButtonClick);
};

export {resetScale, addListenersToScaleButton, removeListenersToScaleButton};
