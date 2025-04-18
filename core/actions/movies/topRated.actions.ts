import { MovieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastucture/interfaces/movieDb-response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mappers";

interface Options {
  page?: number;
  limit?: number;
}

export const TopRatedMoviesActions = async ({ limit, page }: Options) => {
  try {
    const { data } = await MovieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page: page,
        limit: limit,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBMovie);

    return movies;
  } catch (error) {
    console.error(error);
    throw "cannot load now playing now";
  }
};
