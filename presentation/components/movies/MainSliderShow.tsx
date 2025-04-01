import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { Movie } from "@/infrastucture/interfaces/movie.interface";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface PropsSlider {
  movies: Movie[];
}

const MainSliderShow = ({ movies }: PropsSlider) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
  return (
    <View className="h-[250] w-full">
      <Carousel
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        ref={ref}
        width={200}
        height={350}
        style={{
          width: width,
          justifyContent: "center",
          alignItems: "center",
          height: 350,
        }}
        mode="parallax"
        defaultIndex={1}
      />
    </View>
  );
};

export default MainSliderShow;
