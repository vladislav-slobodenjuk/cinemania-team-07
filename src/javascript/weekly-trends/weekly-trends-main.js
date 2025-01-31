import { createMarkup, insertMarkup } from './weekly-trends-markup.js';
import debounce from 'lodash.debounce';
import { onError } from './on-error.js';
import { CardHandler } from './card-handler.js';
import { getTrendyFilms } from '../api-service/api-service.js';
// import { openModalAboutFilm } from '../modal/movieModal.js';
// import modalInit from '../modal/modalInit.js';

window.addEventListener('DOMContentLoaded', showWeeklyTrends);
window.addEventListener('resize', debounce(showWeeklyTrends, 200));

const inputPlace = document.querySelector('.cards-list');
const filmList = document.querySelector('.listListener');
const cardHandler = new CardHandler();

export async function showWeeklyTrends() {
  cardHandler.setCurrentAmount();

  if (cardHandler.prevAmount === cardHandler.currentAmount) return;

  const numMovies = cardHandler.currentAmount;
  try {
    const data = await getTrendyFilms();
    const films = data.results.slice(0, numMovies);
    const markup = createMarkup(films);
    //insert markup
    insertMarkup(inputPlace, markup);
    //add listeners
    filmList.addEventListener('click', event => {
      // const li = event.target.closest('.card-item');
      // const movieId = li.getAttribute('data-id');
      // openModalAboutFilm(movieId);
      // modalInit(event.target.closest('.card-item').getAttribute('data-id'));
    });
  } catch (error) {
    onError(error);
  }
}
