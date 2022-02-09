import React from "react";
import Slider from "react-slick";
import './testimonial_slide.css'

function TestimonialSlide() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplay:true, 
        slidesToShow: 3,
        slidesToScroll: 1,
        
      };
    return (
        <div>
            <section className='testimonial-section'>
              <div className="container">
              <h1>Testimonials</h1>
              </div>
            <Slider {...settings}>
          <div>
                <div className="testimonial-text">
                    <h2><span>Mr. Dheeraj Anand</span>Nestle India</h2>
                    <p>When we say Infinite Creative Possibilities, we mean it. 
                      From Print Design, Packaging, Branding, to Emailers, 
                      Newsletters, & Digital. From Stop-motion Animation, Food CGI, 
                      to AR Filters & Games. We bring together experts in each 
                      discipline so you get a complete team for all your creative 
                      requirements. 
                    </p>
                </div>
          </div>
          <div>
          <div className="testimonial-text">
                    <h2><span>Mr. Dheeraj Anand</span>ICICI Bank</h2>
                    <p>When we say Infinite Creative Possibilities, we mean it. 
                      From Print Design, Packaging, Branding, to Emailers, 
                      Newsletters, & Digital. From Stop-motion Animation, Food CGI, 
                      to AR Filters & Games. We bring together experts in each 
                      discipline so you get a complete team for all your creative 
                      requirements. 
                    </p>
                </div>
          </div>
          <div>
          <div className="testimonial-text">
                    <h2><span>Mr. Dheeraj Anand</span>TATA M</h2>
                    <p>When we say Infinite Creative Possibilities, we mean it. 
                      From Print Design, Packaging, Branding, to Emailers, 
                      Newsletters, & Digital. From Stop-motion Animation, Food CGI, 
                      to AR Filters & Games. We bring together experts in each 
                      discipline so you get a complete team for all your creative 
                      requirements. 
                    </p>
                </div>
          </div>
          <div>
          <div className="testimonial-text">
                    <h2><span>Mr. Dheeraj Anand</span>Nestle India</h2>
                    <p>When we say Infinite Creative Possibilities, we mean it. 
                      From Print Design, Packaging, Branding, to Emailers, 
                      Newsletters, & Digital. From Stop-motion Animation, Food CGI, 
                      to AR Filters & Games. We bring together experts in each 
                      discipline so you get a complete team for all your creative 
                      requirements. 
                    </p>
                </div>
          </div>
          <div>
          <div className="testimonial-text">
                    <h2><span>Mr. Dheeraj Anand</span>ICICI Bank</h2>
                    <p>When we say Infinite Creative Possibilities, we mean it. 
                      From Print Design, Packaging, Branding, to Emailers, 
                      Newsletters, & Digital. From Stop-motion Animation, Food CGI, 
                      to AR Filters & Games. We bring together experts in each 
                      discipline so you get a complete team for all your creative 
                      requirements. 
                    </p>
                </div>
          </div>
          
          
            </Slider>
            </section>
        </div>
    )
}

export default TestimonialSlide
