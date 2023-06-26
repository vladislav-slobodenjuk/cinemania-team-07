import { insertMarkup } from '../weekly-trends/weekly-trends-markup';
import { createMarkup } from '../weekly-trends/weekly-trends-markup';
import defaultImg from '../../images/default.jpg';
import { STORAGE_KEY } from '../api-service/api_keys';
import { openModalAboutFilm } from '../modal/movieModal';
import { createDefaultMarkup } from './filmCard/createDefaultMarkup';

export const libraryRef = document.querySelector('.library');
const btnLib = document.getElementById('loadMore');
const filmList = document.querySelector('.listListener');

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
    createLibraryMarkup(libraryInParts);
    btnLib?.classList.add('is-hidden');
  } else {
    createLibraryMarkup(libraryInParts);
    btnLib.classList.remove('is-hidden');
  }
}



async function createLibraryMarkup(libraryInParts) {
  if (libraryRef && libraryInParts.length === 0) {
    const defaultMarkup = createDefaultMarkup();
    return insertMarkup(libraryRef, defaultMarkup);
  }

  const cardsMarkup = createMarkup(libraryInParts);
  insertMarkup(libraryRef, cardsMarkup);
}

filmList.addEventListener('click', event => {
  const li = event.target.closest('.card-item');
  const movieId = li.getAttribute('data-id');
  openModalAboutFilm(movieId);
});
