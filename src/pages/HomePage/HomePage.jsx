import React from "react";
import CarouselMovie from "./CarouselMovie/CarouselMovie";
import ListMovie from "./ListMovie/ListMovie";
import ResponsiveTailwinds from "../../components/ResponsiveTailwinds/ResponsiveTailwinds";

const HomePage = () => {
  return (
    <div>
      <ResponsiveTailwinds />
      <CarouselMovie />
      <ListMovie />
    </div>
  );
};

export default HomePage;
