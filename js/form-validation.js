const HASHTAG_MAX_COUNT = 5;
const HASHTAG_MAX_LENGTH = 20;
const COMMENT_MAX_LENGTH = 140;

const HASHTAG_VALID = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorMessages = {
  INVALID_COUNT: `Максимум ${HASHTAG_MAX_COUNT} хэштегов`,
  INVALID_HASHTAG: `Хештег должен начинаться с #, состоять из букв, чисел, не превышать ${HASHTAG_MAX_LENGTH} символов.`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальными',
  INVALID_LENGTH_COMMENT: `Максимум ${COMMENT_MAX_LENGTH} символов`,
};

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');


const pristine = new Pristine(uploadForm ,{
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
},
true);

const normalizeTags = (tagsString) => tagsString.trim().split(' ').filter((item) => Boolean(item.length));
const hasValidCount = (tags) => normalizeTags(tags).length <= HASHTAG_MAX_COUNT;
const hasValidTags = (tags) => normalizeTags(tags).every((tag) => HASHTAG_VALID.test(tag));
const hasUniqueTags = (tags) => {
  const lowerCaseTags = normalizeTags(tags).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
const hasValidCountLengthComment = (value) => value.length <= COMMENT_MAX_LENGTH;

pristine.addValidator(textHashtags, hasValidCount, ErrorMessages.INVALID_COUNT, 4, true);
pristine.addValidator(textHashtags, hasValidTags, ErrorMessages.INVALID_HASHTAG, 3, true);
pristine.addValidator(textHashtags, hasUniqueTags, ErrorMessages.NOT_UNIQUE, 2, true);
pristine.addValidator(textDescription, hasValidCountLengthComment, ErrorMessages.INVALID_LENGTH_COMMENT, 1, true);

export { pristine };
