const PHOTO_COUNT = 25;
const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const PHOTO_URL_MIN = 1;
const PHOTO_URL_MAX = 25;
const PHOTO_DESCRIPTIONS = [
  'Отпуск нужен всегда.',
  'Не напрягайся, просто расслабься.',
  'Обретение ясности и цели.',
  'Если не сейчас, то когда?',
  'Автономный режим.',
  'Когда ничего не помогает, возьмите отпуск.'];
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_ID_MIN = 1;
const COMMENTS_ID_MAX = 300;
const COMMENTS_AVATAR_COUNT_MIN = 1;
const COMMENTS_AVATAR_COUNT_MAX = 6;
const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENTS_NAMES = ['Иван', 'Мария', 'Виктор', 'Юлия', 'Алексей', 'Роман', 'Наталья', 'Ирина', 'Олег', 'Жанна'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomValue = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotoId = getRandomValue(PHOTO_ID_MIN, PHOTO_ID_MAX);
const generateCommentId = getRandomValue(COMMENTS_ID_MIN, COMMENTS_ID_MAX);
const generatePhotoUrl = getRandomValue(PHOTO_URL_MIN, PHOTO_URL_MAX);

const createPicture = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(COMMENTS_AVATAR_COUNT_MIN, COMMENTS_AVATAR_COUNT_MAX)}.svg`,
    message: getRandomArrayElement(COMMENTS_MESSAGES),
    name: getRandomArrayElement(COMMENTS_NAMES),
  }
});

const getPictures = Array.from({length: PHOTO_COUNT}, createPicture);
getPictures ();
