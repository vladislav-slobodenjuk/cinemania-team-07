import axios from 'axios';
import { API_URL, API_KEY } from './api_keys';

// all apis here

export async function getTrendyFilms() {
  const films = await axios.get(
    `${API_URL}/trending/all/week?api_key=${API_KEY}`
    // `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  return films;
}

export async function getGenresData() {
  const response = await axios.get(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}`
    // `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data.genres;
}

export async function getMovieById(movieId) {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
  );
  return response;
}
