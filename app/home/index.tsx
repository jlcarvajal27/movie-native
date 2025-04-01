import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSliderShow from "@/presentation/components/movies/MainSliderShow";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { NowPlayingQuery } = useMovies();

  if (NowPlayingQuery.isLoading) {
    return (
      <View>
        <ActivityIndicator color="purple" size={50} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="px-4 mb-2 text-2xl font-bold">Movie App </Text>

      <MainSliderShow movies={NowPlayingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
