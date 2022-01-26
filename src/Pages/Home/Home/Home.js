import React from "react";
// import Advenure from '../Advenure/Advenure';
import GreatTravel from "../GreatTravel/GreatTravel";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import PopularHotels from "../PopularHotels/PopularHotels";
import PopularTours from "../PopularTours/PopularTours";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <PopularTours />
      <PopularHotels />
      <NewsAndEvents />
      <GreatTravel />
    </>
  );
};

export default Home;
