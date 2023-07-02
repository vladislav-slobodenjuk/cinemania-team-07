import { STORAGE_KEY } from '../api-service/api_keys';
import { createLibraryMarkup } from './createLibraryMarkup';
import { btnLib } from './ref';

const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

window.addEventListener('DOMContentLoaded', () => {
  getLibrarylistInParts(library);
});

btnLib?.addEventListener('click', onLoadMoreClick);

function onLoadMoreClick() {
  firstEl += 9;
  totalElementInList += 9;
  getLibrarylistInParts(library);
}
let totalElementInList = 0;
let firstEl = 0;

function getLibrarylistInParts(libraryData) {
  const totalLiberyLength = libraryData.length;
  const libraryInParts = libraryData.slice(firstEl, firstEl + 9);

  if (totalLiberyLength - totalElementInList <= 9) {
    console.log(totalElementInList);
    createLibraryMarkup(libraryInParts);
    btnLib?.classList.add('is-hidden');
  } else {
    createLibraryMarkup(libraryInParts);
    btnLib.classList.remove('is-hidden');
  }
}
