import React from 'react'
import Slider from "react-slick";
import './tabslider.css'

function TabSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
      return (
         <div id="tabslider">
              <Slider {...settings}>
          <div>
                <img src={require('../../assets/images/slideimage.png')} />
          </div>
          <div>
                <img src={require('../../assets/images/slideimage.png')} />
          </div>
          <div>
                <img src={require('../../assets/images/slideimage.png')} />
          </div>
          
        </Slider>
        </div>
          
        
      );
}

export default TabSlider
