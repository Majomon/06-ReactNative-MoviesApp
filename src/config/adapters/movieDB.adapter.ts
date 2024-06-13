// import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: THE_MOVIE_DB_KEY,
    api_key: '3b631b0a18599ad865e9044ad200434e',
    language: 'es',
  },
});
