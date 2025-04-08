import { MovieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastucture/interfaces/movie.interface";
import { MovieResponseByID } from "@/infrastucture/interfaces/movieDb-movie.response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mappers";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await MovieApi.get<MovieResponseByID>(`/${id}`);

    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.error(error);
    throw "cannot load now playing now";
  }
};
