export const refs = {
  backdrop: document.querySelector('.modal__backdrop'),
  // modal: document.querySelector('.modal__container'),
  modalBtnClose: document.querySelector('.modal__button-close'),
  modalContent: document.querySelector('.modal__wrapper'),
};

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
  if (e.target === e.currentTarget) {
    closeModal();
    refs.backdrop.removeEventListener('click', handleOuterClick);
  }
}

function closeModal() {
  refs.backdrop.classList.add('modal__backdrop--hide');
  refs.modalContent.innerHTML = '';
  document.body.removeAttribute('style');
}
