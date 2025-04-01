import { View, Text, FlatList } from "react-native";
import React from "react";
import MoviePoster from "./MoviePoster";
import { Movie } from "@/infrastucture/interfaces/movie.interface";

interface Props {
  movies: Movie[];
  title?: string;
}

const TopRatedMovies = ({ movies, title }: Props) => {
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

export default TopRatedMovies;
