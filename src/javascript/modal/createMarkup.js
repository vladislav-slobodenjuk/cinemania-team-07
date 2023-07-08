import { findFilmAtStorage } from '../upcoming/helpers';
import { STORAGE_KEY } from '../api-service/api_keys';
import posterAbsent from '../../images/default.jpg';
import { POSTER_BASE_URL } from '../api-service/api_keys';

// const posterBaseUrl = 'https://image.tmdb.org/t/p/original';

export default function createMarkup(details, isTrailer) {
  if (isTrailer) return createTrailerMarkup(details);
  return createDetailsMarkup(details);
}

function createDetailsMarkup({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) {
  const isSaved = findFilmAtStorage(STORAGE_KEY, id);
  // console.log('myIsSaved', isSaved);
  const btnAttribute = isSaved ? 'remove' : 'add';
  const btnText = isSaved ? 'Remove from my library' : 'Add to my library';

  return `<img class="modal__poster" 
		src="${checkPoster(poster_path)}" 
		alt="Poster">

			<div class="modal__description">
				<h2 class="modal__title">${title}</h2>

				<div class="modal__stats">
					<div class="stats__row">
						<p class="stats__name">Vote / Votes</p>
						<p class="stats__data">${checkVotes(vote_average, vote_count)}</p>
					</div>
					<div class="stats__row">
						<p class="stats__name">Popularity</p>
						<p class="stats__data">${new Intl.NumberFormat('en-US').format(
              popularity.toFixed(1)
            )}</p>
					</div>
					<div class="stats__row">
						<p class="stats__name">Genre</p>
						<p class="stats__data">${genres.map(({ name }) => name).join(' | ')}</p>
					</div>
				</div>

				<h3 class="modal__about">About</h3>
				<p class="modal__text">${overview}</p>

				<div class="modal__buttons-wrapper">
					<div class="modal__button-border">
						<button
			    		class="modal__button--filled"
						  type="button"
							data-id=${id} 
							data-action=${btnAttribute}
						>
							${btnText}
						</button>
					</div>
					<div class="modal__button-border">
						<button 
							class="modal__button--outlined" 
							type="button"
							data-id=${id}
							data-trailer
						>
							Watch trailer
						</button>
					</div>
				</div>
			</div>`;
}

function checkPoster(poster_path) {
  if (!poster_path) return posterAbsent;
  return `${POSTER_BASE_URL}${poster_path}`;
}

function checkVotes(vote_average, vote_count) {
  if (!vote_count) return 'Not voted yet';

  return `
		<span class="stats__data-votes">${vote_average.toFixed(1)}</span>
		<span class="stats__data-separator"> / </span>
		<span class="stats__data-votes">${new Intl.NumberFormat('en-US').format(
      vote_count
    )}</span>
	`;
}

function createTrailerMarkup({ videos: { results: videoResults } }) {
  videoResults.filter(({ name }) => name.toLowerCase().includes('official'));

  const randomVideoKey =
    videoResults[Math.round(Math.random() * (videoResults.length - 1))].key;
  const videoSource = `https://www.youtube.com/embed/${randomVideoKey}?rel=0&amp;controls=1&amp;showinfo=0&autoplay=1`;

  return `
		<iframe
			src="${videoSource}" 
			width="616"
			height="400"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen>
		</iframe>
	`;
}
