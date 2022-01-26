import React from "react";
import Header from "../../Shared/Header/Header";
// import Advenure from '../Advenure/Advenure';
import GreatTravel from "../GreatTravel/GreatTravel";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import PopularHotels from "../PopularHotels/PopularHotels";
import PopularTours from "../PopularTours/PopularTours";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <PopularTours />
      <PopularHotels />
      <NewsAndEvents />
      <GreatTravel />
    </>
  );
};

export default Home;
