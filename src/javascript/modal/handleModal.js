import { getMovieById } from '../api-service/api-service';
import createMarkup from './createMarkup';
import createErrorMarkup from './createErrorMarkup';
import { insertMarkup } from '../weekly-trends/weekly-trends-markup';
import { openModal } from './openModal';
import { refs } from './closeModal';

export default async function handleModal(e) {
  const movieId =
    e.target.dataset.id ||
    e.target.getAttribute('trailer-id') ||
    e.target.closest('.card-item').getAttribute('data-id');

  const option = e.target.hasAttribute('trailer-id') ? 'trailer' : null;

  try {
    const movie = await getMovieById(movieId);
    const modalMarkup = createMarkup(movie, option);
    insertMarkup(refs.modalContent, modalMarkup);
  } catch (error) {
    console.trace(error);
    const errorMarkup = createErrorMarkup();
    insertMarkup(refs.modalContent, errorMarkup);
  } finally {
    openModal();
  }
}
