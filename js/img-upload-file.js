import {FILE_TYPES} from './data.js';

const fileChooserElement = document.querySelector('.img-upload__input[type=file]');
const previewElement = document.querySelector('.img-upload__preview img');
const previewEffectsElement = document.querySelectorAll('.effects__preview');

const addFileChooserListener = () => {
  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewElement.src = URL.createObjectURL(file);
      previewEffectsElement.forEach((value) => {
        value.style.backgroundImage = `url(${previewElement.src})`;
      });
    }
  });
};

export {addFileChooserListener};
