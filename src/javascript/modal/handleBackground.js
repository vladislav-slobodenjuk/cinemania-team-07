export default function handleBackground() {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  if (
    document
      .querySelector('.modal__backdrop')
      .classList.contains('modal__backdrop--hide')
  ) {
    document.body.removeAttribute('style');
  } else {
    document.body.style.overflow = 'hidden';
    // document.body.style.paddingRight = `${scrollBarWidth}px`;
  }
}
