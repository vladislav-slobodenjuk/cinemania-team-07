const posterBaseUrl = 'https://image.tmdb.org/t/p/original';
const content = document.querySelector('.modal__wrapper');

export default function createMarkup(details, options) {
  console.log(details);

  if (options) return markupModalTrailer(details);
  return markupModalDetails(details);

  // const modalMarkup =
  //   options === 'trailer'
  //     ? renderModalTrailer(details)
  //     : renderModalDetails(details);

  // content.insertAdjacentHTML('afterbegin', modalMarkup);
}

function markupModalDetails({
  poster_path = './images/default.jpg',
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  videos: { results: videoResults },
}) {
  console.log(
    videoResults.filter(({ name }) => name.toLowerCase().includes('official'))
  );
  return `<img class="modal__poster" src="${posterBaseUrl}${poster_path}" alt="Poster">

			<div class="modal__description">
				<h2 class="modal__title">${title}</h2>

				<div class="modal__stats">
					<div class="stats__row">
						<p class="stats__name">Vote / Votes</p>
						<p class="stats__data">
							<span class="stats__data-votes">${vote_average.toFixed(1)}</span>
							<span class="stats__data-separator"> / </span>
							<span class="stats__data-votes">${new Intl.NumberFormat('en-US').format(
                vote_count
              )}</span>
						</p>
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
						<button class="modal__button--filled" type="button">Add to my library</button>
					</div>
					<div class="modal__button-border">
						<button class="modal__button--outlined" type="button">Watch trailer</button>
					</div>
				</div>
			</div>`;
}

function markupModalTrailer({ videos: { results: videoResults } }) {
  console.log(
    videoResults.filter(({ name }) => name.toLowerCase().includes('official'))
  );

  const randomVideoKey =
    videoResults[Math.round(Math.random() * (videoResults.length - 1))].key;
  const videoSource = `https://www.youtube.com/embed/${randomVideoKey}?rel=0&amp;controls=1&amp;showinfo=0`;
  console.log(randomVideoKey);

  const video = document.createElement('iframe');
  video.src = videoSource;
  video.width = '616';
  video.height = '400';
  video.frameBorder = '0';
  video.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  video.allowFullscreen = '';

  return `<iframe src="${videoSource}" width="616" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
