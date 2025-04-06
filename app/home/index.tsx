import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useMovies } from "@/presentation/hooks/useMovie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSliderShow from "@/presentation/components/movies/MainSliderShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { NowPlayingQuery, PopularQuery, TopRatedQuery, UpcomingQuery } =
    useMovies();

  if (NowPlayingQuery.isLoading) {
    return (
      <View>
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="pb-8 mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="px-4 text-2xl font-bold">Movie App</Text>

        <MainSliderShow movies={NowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          title="Popular Movies"
          className="mb-5"
          movies={PopularQuery.data ?? []}
          loadNextPage={TopRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          title="Mejores calificadas"
          className="mb-5"
          movies={TopRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={TopRatedQuery.fetchNextPage}
        />
        <MovieHorizontalList
          title="Próximamente en cine"
          className="mb-5"
          movies={UpcomingQuery.data ?? []}
          loadNextPage={TopRatedQuery.fetchNextPage}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
