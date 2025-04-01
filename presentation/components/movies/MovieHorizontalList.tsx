import { View, Text, FlatList } from "react-native";
import React from "react";
import { Movie } from "@/infrastucture/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
}

const MovieHorizontalList = ({ movies, title }: Props) => {
  return (
    <View>
      {title && <Text className="px-4 mb-3 text-2xl font-bold">{title}</Text>}

      <FlatList
        horizontal
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        data={movies}
      />
    </View>
  );
};

export default MovieHorizontalList;
