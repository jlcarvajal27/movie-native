import { Cast } from "@/infrastucture/interfaces/cast";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

export const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-28">
      <Text className="px-5 mb-5 text-2xl font-bold">Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  );
};
