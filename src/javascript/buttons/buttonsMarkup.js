export function buttonsMarkup({ btnType, btnAttribute, id }) {
  switch (btnType) {
    case 'watchTrailer':
      return markupTrailerBtn(id);

    case 'handleLibrary':
      return markupLibraryBtn(btnAttribute, id);

    case 'moreDetails':
      break;
  }
}

function markupTrailerBtn(id) {
  return `
		<div class="button__border">
			<button 
				class="button button--filled" 
				type="button"
				data-id=${id}
				data-trailer
			>
				Watch trailer
			</button>
		</div>
	`;
}

function markupLibraryBtn(btnAttribute, id) {
  return `
		<div class="button__border">
			<button
				class="button button--outlined"
				type="button"
				data-id=${id} 
				data-action=${btnAttribute}
			>
				${btnAttribute === 'add' ? 'Add to my library' : 'Drop from my library'}
			</button>
		</div>
	`;
}
