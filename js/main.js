import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {renderModalForm} from './form.js';
import {setDefaultSlider} from './filters.js';

const arrPictures = getPictures();

renderGallery(arrPictures);

renderModalForm();
setDefaultSlider();
