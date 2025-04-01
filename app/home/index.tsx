import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSliderShow from "@/presentation/components/movies/MainSliderShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import TopRatedMovies from "@/presentation/components/movies/TopRatedMovies";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { NowPlayingQuery, PopularQuery, TopRatedQuery } = useMovies();

  if (NowPlayingQuery.isLoading) {
    return (
      <View>
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <View className="flex gap-4" style={{ paddingTop: safeArea.top }}>
      <Text className="px-4 text-2xl font-bold">Movie App</Text>

      <MainSliderShow movies={NowPlayingQuery.data ?? []} />
      <MovieHorizontalList
        title="Popular Movies"
        movies={PopularQuery.data ?? []}
      />
      <TopRatedMovies
        title="Mejores Calificadas"
        movies={TopRatedQuery.data ?? []}
      />
    </View>
  );
};

export default HomeScreen;
