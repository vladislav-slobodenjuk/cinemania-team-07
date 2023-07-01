import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { refs } from './refs';
import { getTrendyFilms, getSearchedMovies } from '../api-service/api-service';

import {
  createErrorMarkup,
  createServerErrorMessageMarkup,
} from './create-error-markup';

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

    handleResultList(catalogMovies.results);
    resetPaginationInterface(catalogMovies.total_results);
    handlePaginationAppearance(catalogMovies.results);
  } catch (error) {
    handleServerErrorMarkup();
    handlePaginationAppearance();
  }
}

async function handleSearchedMovies(query) {
  try {
    const searchedMovies = await getSearchedMovies(query);
    const totalResults = searchedMovies.total_results;

    if (searchedMovies.results.length === 0 || query === '') {
      handleEmptyResult();

      handlePaginationAppearance(totalResults);
      return;
    }

    hideElement(errorContainer);

    handleResultList(searchedMovies.results);

    resetPaginationInterface(totalResults, query);
    handlePaginationAppearance(totalResults);
  } catch (error) {
    handleServerErrorMarkup();
    handlePaginationAppearance();
  }
}

// =========== Допоміжні функії =========== //

// Розмітка і пагінація

function handleResultList(moviesArray) {
  const moviesMarkup = createMarkup(moviesArray);
  insertMarkup(catalogList, moviesMarkup);
}

function resetPaginationInterface(moviesArray, query = '') {
  paginationInstance.reset(moviesArray);

  query === ''
    ? setPageForTrends(paginationInstance, query)
    : setPageForSearchedMovies(paginationInstance, query);
}

function handlePaginationAppearance(totalItems = 0) {
  totalItems <= 20
    ? hideElement(paginationContainer)
    : showElement(paginationContainer);
}

// Обробка сабміту форми, отримання query

function onSubmit(event) {
  event.preventDefault();
  const query = event.target.children.search.value.trim();

  handleSearchedMovies(query);

  clearSearchInput();
}

function clearSearchInput() {
  searchInput.value = '';
  hideElement(cancelBtn);
}

// Обробка помилки

function handleEmptyResult() {
  const markup = createErrorMarkup();
  insertMarkup(errorContainer, markup);

  showElement(errorContainer);
  catalogList.innerHTML = '';
}

function handleServerErrorMarkup() {
  const errorMarkup = createServerErrorMessageMarkup();
  insertMarkup(errorContainer, errorMarkup);

  showElement(errorContainer);
}

// Cancel Button

function onInput(event) {
  const input = event.currentTarget;

  if (input.value.trim() !== '') return showElement(cancelBtn);
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
