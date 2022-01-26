import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import slider01 from "../../../images/slide_1.jpg";
import slider02 from "../../../images/slide_2.jpg";
import slider03 from "../../../images/slide_3.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="slier">
            <img
              className="d-block w-100 h-30"
              src={slider01}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="caption">
                <h1>Start to Enjoy unique places </h1>
                <p>Finally... it's time to relax</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slier">
            <img
              className="d-block w-100 h-30"
              src={slider02}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className="caption">
                <h1>Top rated tours, hotels and restaurants.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slier">
            <img
              className="d-block w-100 h-30"
              src={slider03}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="caption">
                <h1> Great places to discover</h1>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
