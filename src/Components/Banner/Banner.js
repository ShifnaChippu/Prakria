import React from 'react'
import './banner.css'

function Banner() {
    return (
        <div>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <h1><span>UNLIMITED</span> HIGH QUALITY DESIGNS. <span>ZERO</span> HASSLE.</h1>
                            <div className='banner-text'><strong>80%</strong>less <span>COST</span> vs regular agencies</div>
                            <div className='banner-text'><strong>55%</strong>more <span>SPEED</span> and <span>RELIABILITY</span> vs freelancers</div>
                            <div className='banner-text'>World-class <span>QUALITY</span> design team <br></br>vs. in-house designers</div>
                            <a href='#' className='pricing-btn'>SEE PRICING</a>
                            <a href='#' className='pricing-btn'>WATCH DEMO</a>
                        </div>
                        <div className='col-md-5'></div>
                    </div>
                </div>
            </section>
       </div>
    )
}

export default Banner
