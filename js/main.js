import {getPictures} from './data.js';
import {renderPictures} from './thumbnails.js';
import {renderGallery} from './gallery.js';

const arrPictures = getPictures();
renderPictures(arrPictures);

renderGallery(arrPictures);
