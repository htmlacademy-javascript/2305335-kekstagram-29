import {HASHTAG_MAX_COUNT, COMMENT_MAX_LENGTH, HASHTAG_VALID, ErrorMessages} from './data.js';

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(form ,{
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

export {pristine};
