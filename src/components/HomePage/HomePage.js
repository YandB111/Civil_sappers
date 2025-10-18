import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";

// Import your images (replace with your actual image paths)
import img1 from "../../assets/service/slider1.jpg";
import img2 from "../../assets/service/slider2.jpg";


const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Civil Sappers</h1>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src={img2} alt="Slide 2" className="slide-image" />
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
