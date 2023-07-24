//import {getPictures} from './data.js';
import {renderGallery} from './gallery.js';
import {renderModalForm} from './form.js';
import {setDefaultSlider} from './filters.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form.js';
import {showAlert} from './utils.js';

// const arrPictures = getPictures();

// renderGallery(arrPictures);

getData().then((picturesArray)=>{
  renderGallery(picturesArray);
  renderModalForm(picturesArray);
})
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setDefaultSlider();
setUserFormSubmit();
