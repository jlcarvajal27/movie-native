import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastucture/interfaces/movie.interface";
import { View, Text } from "react-native";

interface MovieDescriptionProps {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row gap-3">
        <Text className="text-lg font-bold">{movie.rating}--</Text>
        <Text className="text-lg font-bold">{movie.genres.join(",")}</Text>
      </View>

      <Text className="mt-5 text-2xl font-bold">Historia </Text>
      <Text className="mt-1 font-semibold">{movie.description} </Text>
      <Text className="mt-5 text-2xl font-bold">Presupuesto </Text>
      <Text className="mt-1 font-semibold">
        {Formatter.currency(movie.budget)} $
      </Text>
    </View>
  );
};

export default MovieDescription;
