import { createMarkup } from '../weekly-trends/weekly-trends-markup';
import { createDefaultMarkup } from './filmCard/createDefaultMarkup';
import { libraryRef } from './ref';

export async function createLibraryMarkup(libraryInParts) {
  if (libraryRef && libraryInParts.length === 0) {
    const defaultMarkup = createDefaultMarkup();
    return libraryRef.insertAdjacentHTML('beforeend', defaultMarkup);
  }

  const cardsMarkup = createMarkup(libraryInParts);
  return libraryRef.insertAdjacentHTML('beforeend', cardsMarkup);
}
