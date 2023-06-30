const loaderEl = document.querySelector('.loader');

document.body.style.overflow = 'hidden';

window.addEventListener('load', hideLoader);

function hideLoader() {
  loaderEl.classList.remove('loader--shown');
  document.body.removeAttribute('style');

  window.removeEventListener('load', hideLoader);
}
