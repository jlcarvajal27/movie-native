import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

interface MovieHeaderProps {
  poster: string;
  original_title: string;
  title: string;
}
const MovieHeader = ({ original_title, poster, title }: MovieHeaderProps) => {
  const { height } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={{ x: 0, y: 0 }}
        style={{
          height: height * 0.4,
          width: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 35,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        style={{ height: height * 0.7 }}
        className="shadow-xl shadow-black/20 "
      >
        <View className="flex-1 mt-5 rounded-b-[25px] overflow-hidden">
          <Image
            source={{
              uri: poster,
            }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="mx-5 mt-5 ">
        <Text className="font-normal">{original_title}</Text>
        <Text className="text-2xl font-semibold">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
