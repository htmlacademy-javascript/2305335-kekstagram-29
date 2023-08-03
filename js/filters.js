import {EFFECTS} from './data.js';

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const sliderContainerElement = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectSliderValueElement = document.querySelector('.effect-level__value');
const effectsListElement = document.querySelector('.img-upload__effects');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

const showSliderContainer = () => sliderContainerElement.classList.remove('hidden');
const hideSliderContainer = () => sliderContainerElement.classList.add('hidden');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    start: DEFAULT_EFFECT.max,
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    step: DEFAULT_EFFECT.step,
    connect: 'lower',
  });
};

const isDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSettingsSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    start: currentEffect.max,
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    connect: 'lower',
  });

};

const onEffectsChange = (evt) => {
  currentEffect = EFFECTS.find((element) => element.name === evt.target.value);
  if (!isDefault()) {
    updateSettingsSlider();
    showSliderContainer();
  } else {
    updateSettingsSlider();
    hideSliderContainer();
  }

};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  if (isDefault()) {
    imagePreviewElement.style.filter = DEFAULT_EFFECT.style;
  } else{
    imagePreviewElement.style.filter = `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  }
  effectSliderValueElement.value = sliderValue;
};

const addEffectListener = () => {
  effectsListElement.addEventListener('change', onEffectsChange);
};

const removeEffectListener = () => {
  effectsListElement.removeEventListener('change', onEffectsChange);
};

const setDefaultSlider = () => {
  createSlider();
  hideSliderContainer();
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSettingsSlider();
};

export {setDefaultSlider, resetEffects, addEffectListener, removeEffectListener};
