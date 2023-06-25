import handleBackground from './handleBackground';
import getMovieData from './getMovieData';

const refs = {
  backdrop: document.querySelector('.modal__backdrop'),
  modal: document.querySelector('.modal__container'),
  modalBtnClose: document.querySelector('.modal__button-close'),
  content: document.querySelector('.modal__wrapper'),
};

// document.addEventListener('click', () => {
//   refs.backdrop.classList.remove('modal__backdrop--hide');
//   handleBackground();

//   document.addEventListener('keydown', handleKeyboard);
//   refs.modalBtnClose.addEventListener('click', handleBtnClose);
//   refs.backdrop.addEventListener('click', handleOuterClick);

//   getMovieData('157336');
// });

function closeModal() {
  refs.backdrop.classList.add('modal__backdrop--hide');
  refs.content.innerHTML = '';
  handleBackground();
}

export function handleKeyboard(e) {
  if (e.code === 'Escape') {
    closeModal();
    window.removeEventListener('keydown', handleKeyboard);
  }
}

export function handleBtnClose() {
  closeModal();
  refs.modalBtnClose.removeEventListener('click', handleBtnClose);
}

export function handleOuterClick(e) {
  const withinModal = e.composedPath().includes(refs.modal);

  if (!withinModal) {
    closeModal();
    refs.backdrop.removeEventListener('click', handleOuterClick);
  }
}
