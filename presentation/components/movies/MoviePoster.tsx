import { Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

interface PropsMoviePoster {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({
  poster,
  id,
  smallPoster = false,
  className,
}: PropsMoviePoster) => {
  return (
    <Pressable
      onPress={() =>
        router.push({ pathname: "/movie/[id]", params: { id: String(id) } })
      }
      className={`active: opacity-90 px-2 ${className}`}
    >
      <Image
        source={{
          uri: poster,
        }}
        className="w-full h-full shadow-lg rounded-2xl"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
