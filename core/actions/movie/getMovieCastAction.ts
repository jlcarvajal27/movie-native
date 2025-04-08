import { MovieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastucture/interfaces/movieDb-cast.response";
import { CastMapper } from "@/infrastucture/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await MovieApi.get<CreditsResponse>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.error(error);
    throw "cannot load cast by id";
  }
};
