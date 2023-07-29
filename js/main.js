import {renderGallery} from './gallery.js';
import {renderModalForm} from './form.js';
import {setDefaultSlider} from './filters.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form.js';
import {debounce, showAlert} from './utils.js';
import {showFilters} from './img-filters.js';
import {addFileChooserListener} from './img-upload-file.js';

getData().then((picturesArray)=>{
  const debouncedRenderGallery = debounce (renderGallery);
  renderGallery(picturesArray);
  showFilters(picturesArray, debouncedRenderGallery);
  renderModalForm(picturesArray);
})
  .catch((err) => {
    showAlert(err.message);
  }
  );

setDefaultSlider();
setUserFormSubmit();
addFileChooserListener();
