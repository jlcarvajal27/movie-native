import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { getMovieCastAction } from "@/core/actions/movie/getMovieCastAction";
import { useQuery } from "@tanstack/react-query";

export const useMovieById = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useQuery({
    queryKey: ["movie", "cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });
  return {
    movieQuery,
    castQuery,
  };
};
