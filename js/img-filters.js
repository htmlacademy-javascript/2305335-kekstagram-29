import {getRandomInteger} from './utils.js';
import {COUNT_RANDOM_PHOTOS, FilterType} from './data.js';

let currentFilter = FilterType.DEFAULT;
let defaultPictures = [];

const filtersListElement = document.querySelector('.img-filters');
const filterButtonsElement = document.querySelectorAll('.img-filters__button');

const getFilters = () => {
  if (currentFilter === FilterType.DEFAULT) {
    return defaultPictures;
  }
  if (currentFilter === FilterType.RANDOM) {
    const firstElement = getRandomInteger(0, defaultPictures.length - COUNT_RANDOM_PHOTOS);
    return defaultPictures.slice(firstElement, firstElement + COUNT_RANDOM_PHOTOS);
  }
  if (currentFilter === FilterType.DISCUSSED) {
    return defaultPictures.slice().sort((a, b)=>(b.comments.length - a.comments.length));
  }
};

const onFiltersClick = (evt, callback) =>{
  if (evt.target.classList.contains('img-filters__button')){
    if (evt.target.id === currentFilter) {
      return;
    }
    const filterButton = evt.target;
    currentFilter = evt.target.id;
    filterButtonsElement.forEach((button) => button.classList.remove('img-filters__button--active'));
    filterButton.classList.add('img-filters__button--active');
    callback(getFilters());
  }
};

const addFilterListener = (callback) => {
  filtersListElement.addEventListener('click', (evt) => {
    onFiltersClick(evt, callback);
  });
};

const showFilters = (pictures, callback) => {
  filtersListElement.classList.remove('img-filters--inactive');
  defaultPictures = pictures.slice();
  addFilterListener(callback);
};

export {showFilters};
