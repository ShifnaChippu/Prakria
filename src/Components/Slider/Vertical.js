import React from "react";
import Slider from "react-slick";
import './vertical.css'

export default function Vertical() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true
  };
  return (
     
        <div id="vertical">
              <Slider {...settings}>
      <div>
            <img src={require('../../assets/images/slide-1.png')} />
      </div>
      <div>
            <img src={require('../../assets/images/slide-2.png')} />
      </div>
      <div>
            <img src={require('../../assets/images/slide-1.png')} />
      </div>
    </Slider>
        </div>
      
    
  );
}