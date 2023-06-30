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
			<img src=${errorImage} width="300" alt="Error, something went wrong">
		</div>
	`;
}
