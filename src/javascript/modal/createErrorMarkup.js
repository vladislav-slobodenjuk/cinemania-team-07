import errorImage from '../../images/modal-error.png';

export default function createErrorMarkup() {
  return `
		<div class="modal__error-wrapper">
			<div>
				<p class="modal__error-text">OOPS... We are very sorry!</p>
				<p class="modal__error-text">Something went wrong,<br>
					try again later...
				</p>
			</div>
			<img class="modal__error-img" src=${errorImage} alt="Error, something went wrong">
		</div>
	`;
}
