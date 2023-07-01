import axios from 'axios';
import { API_URL, API_KEY, API_BAERER } from './api_keys';

// all apis here

export async function getGenresData() {
  const response = await axios.get(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}`
    // `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data.genres;
}

// Get movie by Id

export async function getMovieById(movieId) {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`
  );
  return response.data;
}

// Get weekly trends

const tmdbApiInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'en-US', page: '1', api_key: API_KEY },
});

export async function getTrendyFilms(page = 1) {
  let url = '/trending/all/week';
  const response = await tmdbApiInstance.get(url, { params: { page } });

  return response.data;
}

// Get searched catalog movies

const tmdbApiSearchedInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { language: 'en-US', page: '1', query: '' },
  headers: { Authorization: `Bearer ${API_BAERER}` },
});

export async function getSearchedMovies(query = '', page = 1) {
  let url = '/search/movie';

  const response = await tmdbApiSearchedInstance.get(url, {
    params: { query, page },
  });

  return response.data;
}
