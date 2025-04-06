import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesActions } from "@/core/actions/movies/popular.actions";
import { TopRatedMoviesActions } from "@/core/actions/movies/topRated.actions";
import { UpComingMoviesActions } from "@/core/actions/movies/upcoming.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

  const TopRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],

    queryFn: ({ pageParam }) => {
      return TopRatedMoviesActions({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
  });

  const UpcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: UpComingMoviesActions,
    staleTime: 1000 * 60 * 60 * 24,
  });
  return {
    NowPlayingQuery,
    PopularQuery,
    TopRatedQuery,
    UpcomingQuery,
  };
};
