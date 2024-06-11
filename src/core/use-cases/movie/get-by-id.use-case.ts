import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    
  } catch (error) {
    throw new Error(`No se pudo obtener la película de id ${movieId}`);
  }
};
