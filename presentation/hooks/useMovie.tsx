import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesActions } from "@/core/actions/movies/popular.actions";
import { TopRatedMoviesActions } from "@/core/actions/movies/topRated.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const NowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const PopularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  const TopRatedQuery = useQuery({
    queryKey: ["movies", "topRated"],
    queryFn: TopRatedMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });
  return {
    NowPlayingQuery,
    PopularQuery,
    TopRatedQuery,
  };
};
