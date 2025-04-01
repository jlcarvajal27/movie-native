import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const NowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    NowPlayingQuery,
  };
};
