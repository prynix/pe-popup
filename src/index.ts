import Storage from './Storage';
import Popup from './Popup';
import './style.scss';

const
  storage = new Storage(),
  template = document.getElementById('pe__popup-template'),
  adsenseBlockContainer = document.getElementById('adsense');

if (template && adsenseBlockContainer) {
  storage.incrementShowCounter();
  if (storage.canShowPopup()) {
    storage.clear();
    const popup = new Popup(template, adsenseBlockContainer as HTMLDivElement);
    popup
      .create()
      .compute()
      .inject();
  }
}