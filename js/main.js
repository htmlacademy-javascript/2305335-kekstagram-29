import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {renderModalForm} from './form.js';

const arrPictures = getPictures();

renderGallery(arrPictures);

renderModalForm();
