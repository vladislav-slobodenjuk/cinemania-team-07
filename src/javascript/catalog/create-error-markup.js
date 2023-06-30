export function createErrorMarkup() {
  return `<p class="error-information">OOPS...</p>
  <p class="error-information">We are very sorry!</p>
  <p class="error-information">
    We don't have any results matching your search.
  </p>`;
}

export function createServerErrorMessageMarkup() {
  return `<p class="error-information">Server is not available.</p>
    <p class="error-information">Please try again later!</p>
`;
}
