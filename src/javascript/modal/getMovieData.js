import modalFetch from './modalFetch';
import renderModal from './renderModal';

export default function getMovieData(movieId, options) {
  modalFetch(movieId)
    .then(details => renderModal(details, options))
    .catch(error => console.error);
}
