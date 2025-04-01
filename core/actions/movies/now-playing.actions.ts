import { MovieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastucture/interfaces/movieDb-response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mappers";

export const nowPlayingActions = async () => {
  try {
    const { data } = await MovieApi.get<MovieDBMoviesResponse>("/now_playing");

    const movies = data.results.map(MovieMapper.fromTheMovieDBMovie);

    return movies;
  } catch (error) {
    console.error(error);
    throw "cannot load now playing now";
  }
};
