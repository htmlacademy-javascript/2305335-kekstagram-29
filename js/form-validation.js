const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MIN_LENGTH = 2;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;

const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorMessages = {
  INVALID_COUNT: `Максимум ${HASHTAG_MAX_COUNT} хэштегов`,
  INVALID_PATTERN: `Хештег должен начинаться с #, состоять из букв, чисел, не превышать ${HASHTAG_MAX_LENGTH} символов.`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными'
};

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');


const validatePristine = new Pristine(uploadForm ,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
},
true);


export { validatePristine };
