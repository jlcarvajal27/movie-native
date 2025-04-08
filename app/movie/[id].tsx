import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useMovieById } from "@/presentation/hooks/useMovieById";
import { ScrollView } from "react-native-gesture-handler";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import { MovieCast } from "@/presentation/components/movie/MovieCast";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovieById(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex items-center justify-center flex-1">
        <Text className="mb-3 font-bold">Espere por favor</Text>
        <ActivityIndicator size={30} color="purple" />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        original_title={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
