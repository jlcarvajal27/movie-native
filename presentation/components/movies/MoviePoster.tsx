import { Image, Pressable } from "react-native";
import React from "react";

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
    <Pressable className={`active: opacity-90 px-2 ${className}`}>
      <Image
        source={{
          uri: poster,
        }}
        className="shadow-lg rounded-2xl w-full h-full"
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
