import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import AI from "../../images/ai.jfif";
import Android from "../../images/android.png"
import Web from "../../images/web.jpg"
import Native from "../../images/native.png"

const ServicesSection = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "green" }}
        onClick={onClick}
      />
    );
  }


  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return <div className='service-container'>
    <div className='service-header'>
      <h1>Our Services</h1>
      <p>Our greatest priority is our customers, so we provide the best possible services</p>
    </div>
    <div className="service-main">
      <Slider {...settings}>
        <div className="service-images">
          <img src={Android} alt="Ashar Infotech" />
        </div>
        <div className="service-images">
          <img src={Web} alt="Ashar Infotech" />
        </div>
        <div className="service-images">
          <img src={AI} alt="Ashar Infotech" />
        </div>
        <div className="service-images">
          <img src={Native} alt="Ashar Infotech" />
        </div>
      </Slider>
      <Link to="/services">
        <p style={{ position: "absolute", right: "10px" }}>More</p>
      </Link>
    </div>
  </div>;
}

export default ServicesSection
