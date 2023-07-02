import { STORAGE_KEY } from '../../api-service/api_keys';
import { createLibraryMarkup } from '../createLibraryMarkup';
import { libraryRef } from '../ref';


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
