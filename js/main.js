import {renderGallery} from './gallery.js';
import {renderModalForm} from './form.js';
import {setDefaultSlider} from './filters.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form.js';
import {showAlert} from './utils.js';

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
