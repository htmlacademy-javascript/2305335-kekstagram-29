const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';
const COMMENTS_PER_PORTION = 5;
const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;
const HASHTAG_VALID = /^#[a-zа-яё0-9]{1,19}$/i;
const COUNT_RANDOM_PHOTOS = 10;
const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;
const ALERT_SHOW_TIME = 5000;
const DEBOUNCE_TIME = 500;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const EFFECTS = [
  {
    name : 'none',
    style : 'none',
    min : 0 ,
    max : 100,
    step : 1,
    unit : '',
  },
  {
    name : 'chrome',
    style : 'grayscale',
    min : 0 ,
    max : 1,
    step : 0.1,
    unit : '',
  },
  {
    name : 'sepia',
    style : 'sepia',
    min : 0,
    max : 1,
    step : 0.1,
    unit : '',
  },
  {
    name : 'marvin',
    style : 'invert',
    min : 0,
    max : 100,
    step : 1,
    unit : '%',
  },
  {
    name : 'phobos',
    style : 'blur',
    min : 0,
    max : 3,
    step : 0.1,
    unit : 'px',
  },
  {
    name : 'heat',
    style : 'brightness',
    min : 1,
    max : 3,
    step : 0.1,
    unit : '',
  }
];

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const ErrorMessages = {
  INVALID_COUNT: `Максимум ${HASHTAG_MAX_COUNT} хэштегов`,
  INVALID_HASHTAG: `Хештег должен начинаться с #, состоять из букв, чисел, не превышать ${HASHTAG_MAX_LENGTH} символов.`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_LENGTH_COMMENT: `Максимум ${COMMENT_MAX_LENGTH} символов`,
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

const FilterType = {
  DEFAULT: 'filter-default',
  RANDOM:'filter-random',
  DISCUSSED: 'filter-discussed'
};

const Answers = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export {BASE_URL, Route, ErrorText, COMMENTS_PER_PORTION, EFFECTS, HASHTAG_MAX_COUNT, HASHTAG_MAX_LENGTH, COMMENT_MAX_LENGTH, HASHTAG_VALID, ErrorMessages, SubmitButtonText, COUNT_RANDOM_PHOTOS, FilterType, FILE_TYPES, Answers, SCALE_STEP, SCALE_MIN, SCALE_MAX, SCALE_DEFAULT, ALERT_SHOW_TIME, DEBOUNCE_TIME, Method};
