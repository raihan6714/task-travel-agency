import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
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
      <Footer />
    </>
  );
};

export default Home;
