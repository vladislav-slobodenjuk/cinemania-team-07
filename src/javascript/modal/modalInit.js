import handleBackground from './handleBackground';
import getMovieData from './getMovieData';
import {
  handleBtnClose,
  handleKeyboard,
  handleOuterClick,
} from './handleModal';

const refs = {
  backdrop: document.querySelector('.modal__backdrop'),
  modal: document.querySelector('.modal__container'),
  modalBtnClose: document.querySelector('.modal__button-close'),
  content: document.querySelector('.modal__wrapper'),
};

export default function modalInit(movieId, options) {
  refs.backdrop.classList.remove('modal__backdrop--hide');
  handleBackground();

  document.addEventListener('keydown', handleKeyboard);
  refs.modalBtnClose.addEventListener('click', handleBtnClose);
  refs.backdrop.addEventListener('click', handleOuterClick);

  refs.content.innerHTML = '';
  getMovieData(movieId, options);
}
