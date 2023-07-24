//import {getRandomInteger, getRandomValue, getRandomArrayElement} from './utils.js';

// const PHOTO_COUNT = 25;
// const PHOTO_ID_MIN = 1;
// const PHOTO_ID_MAX = 25;
// const PHOTO_URL_MIN = 1;
// const PHOTO_URL_MAX = 25;
// const PHOTO_DESCRIPTIONS = [
//   'Отпуск нужен всегда.',
//   'Не напрягайся, просто расслабься.',
//   'Обретение ясности и цели.',
//   'Если не сейчас, то когда?',
//   'Автономный режим.',
//   'Когда ничего не помогает, возьмите отпуск.'];
// const LIKE_MIN_COUNT = 15;
// const LIKE_MAX_COUNT = 200;
// const COMMENTS_ID_MIN = 1;
// const COMMENTS_ID_MAX = 300;
// const COMMENTS_AVATAR_COUNT_MIN = 1;
// const COMMENTS_AVATAR_COUNT_MAX = 6;
// const COMMENTS_COUNT_MIN = 0;
// const COMMENTS_COUNT_MAX = 30;
// const COMMENTS_MESSAGES = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
// const COMMENTS_NAMES = ['Иван', 'Мария', 'Виктор', 'Юлия', 'Алексей', 'Роман', 'Наталья', 'Ирина', 'Олег', 'Жанна'];

// const generatePhotoId = getRandomValue(PHOTO_ID_MIN, PHOTO_ID_MAX);
// const generateCommentId = getRandomValue(COMMENTS_ID_MIN, COMMENTS_ID_MAX);
// const generatePhotoUrl = getRandomValue(PHOTO_URL_MIN, PHOTO_URL_MAX);

// const generateComment = () => {
//   const arrComments = [];
//   for (let i = COMMENTS_COUNT_MIN; i < getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX); i++) {
//     arrComments.push ({
//       id: generateCommentId(),
//       avatar: `img/avatar-${getRandomInteger(COMMENTS_AVATAR_COUNT_MIN, COMMENTS_AVATAR_COUNT_MAX)}.svg`,
//       message: getRandomArrayElement(COMMENTS_MESSAGES),
//       name: getRandomArrayElement(COMMENTS_NAMES),
//     });
//   }
//   return(arrComments);
// };

// const createPicture = () => ({
//   id: generatePhotoId(),
//   url: `photos/${generatePhotoUrl()}.jpg`,
//   description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
//   likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
//   comments: generateComment()
// });

// const getPictures = () => Array.from({length: PHOTO_COUNT}, createPicture);

// export {getPictures};
