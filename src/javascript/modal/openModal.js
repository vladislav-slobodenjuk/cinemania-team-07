import {
  handleBtnClose,
  handleKeyboard,
  handleOuterClick,
  refs,
} from './closeModal';

export function openModal() {
  refs.backdrop.classList.remove('modal__backdrop--hide');
  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', handleKeyboard);
  refs.modalBtnClose.addEventListener('click', handleBtnClose);
  refs.backdrop.addEventListener('click', handleOuterClick);
}
