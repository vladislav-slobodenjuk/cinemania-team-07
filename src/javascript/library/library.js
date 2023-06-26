import API from './api-library';
import { insertMarkup } from '../weekly-trends/weekly-trends-markup';
import { createMarkup } from '../weekly-trends/weekly-trends-markup';
import defaultImg from '../../images/default.jpg';
// import starsRating from '../../javascript/stars-rating';
import { STORAGE_KEY } from '../api-service/api_keys';
// import { validateGenres } from '../weekly-trends/weekly-trends-genres';
import { openModalAboutFilm } from '../modal/movieModal';
import { createDefaultMarkup } from './filmCard/createDefaultMarkup';

const libraryRef = document.querySelector('.library');
const btnLib = document.getElementById('loadMore');
const filmList = document.querySelector('.listListener');

const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

window.addEventListener('DOMContentLoaded', () => {
  getLibrarylistInParts(library);
});

//////////////////////////////////////////////////////
btnLib?.addEventListener('click', onLoadMoreClick);

function onLoadMoreClick() {
  firstEl += 9;
  totalElementInList += 9;
  getLibrarylistInParts(library);
}
let totalElementInList = 0;
let firstEl = 0;

////////////////////////////////////////////////////////

export async function addFilmCardToLibrary(id) {
  const libraryList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const isAtLibrary = libraryList?.find(x => x.id === Number(id));

  if (isAtLibrary) return console.log('film is at list');

  const movieObj = await getMovieById(id);
  libraryList.push(movieObj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryList));
}



export function deleteFilmCardFromLibrary(id) {
  const libraryList = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const itemToDelete = libraryList.findIndex(film => film.id === Number(id));

  libraryList.splice(itemToDelete, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryList));

  if (window.location.href.includes('library')) {
    libraryRef.innerHTML = '';
    createLibraryMarkup(libraryList);
    const modal = document.querySelector('[data-modal]');
    modal.classList.add('modal-film-is-hidden');
    document.body.classList.remove('body--modal-open');
  }
}













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


async function getMovieById(id) {
  const responce = await API.getMoviById(id);
  return responce.data;
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
