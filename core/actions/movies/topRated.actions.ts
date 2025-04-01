import { MovieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastucture/interfaces/movieDb-response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mappers";

export const TopRatedMoviesActions = async () => {
  try {
    const { data } = await MovieApi.get<MovieDBMoviesResponse>("/top_rated");

    const movies = data.results.map(MovieMapper.fromTheMovieDBMovie);

    return movies;
  } catch (error) {
    console.error(error);
    throw "cannot load now playing now";
  }
};
