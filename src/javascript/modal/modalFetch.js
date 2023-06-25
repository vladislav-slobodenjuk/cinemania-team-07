const API_URL = 'https://api.themoviedb.org/3/movie/';
const api_key = '4c660c0054b28f20c35ae4cd6e2bcd3d';

export default async function modalFetch(movieId) {
  const response = await fetch(
    `${API_URL}${movieId}?api_key=${api_key}&append_to_response=videos`
  );
  return await response.json();
}
