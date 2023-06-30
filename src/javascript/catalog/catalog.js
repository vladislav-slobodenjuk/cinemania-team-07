import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { refs } from './refs';
import { getTrendyFilms, getSearchedMovies } from '../api-service/api-service';
import { createErrorMarkup } from './create-error-markup';

import {
  setPageForTrends,
  setPageForSearchedMovies,
  options,
} from './pagination';

import {
  createMarkup,
  insertMarkup,
} from '../weekly-trends/weekly-trends-markup';

// Рефи

const {
  searchForm,
  searchInput,
  catalogList,
  errorContainer,
  cancelBtn,
  paginationContainer,
} = refs;

const paginationInstance = new Pagination(paginationContainer, options);

// Слухачі

window.addEventListener('DOMContentLoaded', () => {
  handleCatalogTrends();
});

searchForm.addEventListener('submit', onSubmit);

searchInput.addEventListener('input', onInput);

cancelBtn.addEventListener('click', onCancelBtnClick);

// Запит на сервер: Тренди тижня => Пошук

async function handleCatalogTrends() {
  try {
    const catalogMovies = await getTrendyFilms();

    const movies = createMarkup(catalogMovies.results);
    insertMarkup(catalogList, movies);

    paginationInstance.reset(catalogMovies.total_results);
    setPageForTrends(paginationInstance, '');
  } catch (error) {
    console.error(error);
  }
}

async function handleSearchedMovies(query) {
  try {
    const searchedMovies = await getSearchedMovies(query);

    hideElement(errorContainer);
    handlePaginationAppearance(searchedMovies.total_results);

    paginationInstance.reset(searchedMovies.total_results);
    setPageForSearchedMovies(paginationInstance, query);

    if (searchedMovies.results.length === 0 || query === '') {
      handleErrorMarkup();

      handlePaginationAppearance(searchedMovies.total_results);
      return;
    }

    const movies = createMarkup(searchedMovies.results);
    insertMarkup(catalogList, movies);
  } catch (error) {
    console.log(error);
  }
}

// =========== Допоміжні функії =========== //

// Обробка сабміту форми, отримання query

function onSubmit(e) {
  e.preventDefault();
  const query = e.target.children.search.value.trim();

  handleSearchedMovies(query);

  clearSearchInput();
}

function clearSearchInput() {
  searchInput.value = '';
  hideElement(cancelBtn);
}

// Обробка помилки

function handleErrorMarkup() {
  const errorMarkup = createErrorMarkup();
  insertMarkup(errorContainer, errorMarkup);

  showElement(errorContainer);
  catalogList.innerHTML = '';
}

// Cancel Button

function onInput(e) {
  const input = e.currentTarget;

  if (input.value !== '') return showElement(cancelBtn);
  hideElement(cancelBtn);
}

function onCancelBtnClick() {
  searchInput.value = '';

  hideElement(cancelBtn);
}

// Hide or show element

function showElement(element) {
  element.classList.remove('is-hidden');
}

function hideElement(element) {
  element.classList.add('is-hidden');
}

//

function handlePaginationAppearance(totalItems) {
  totalItems <= 20
    ? hideElement(paginationContainer)
    : showElement(paginationContainer);
}
