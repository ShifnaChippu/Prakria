import React, { useState, useEffect } from 'react'
import Banner from '../Banner/Banner'
import './home.css';
import '@brainhubeu/react-carousel/lib/style.css';
import ImageOne from '../../assets/images/slideimage.png'
import ImageTwo from '../../assets/images/slideimage.png'
import ImageThree from '../../assets/images/slideimage.png'
import Services from '../Services/Services';
import Faq from '../Faq/Faq';
import Demo from '../Demo/Demo';
import $ from 'jquery';
import jQuery from 'jquery';
import Vertical from '../Slider/Vertical';
import TabSlider from '../Slider/TabSlider';
import TestimonialSlide from '../Slider/TestimonialSlide';



function Home() {

    useEffect(() => {
        sliderFun()
    }, [])
    const sliderFun = () => {

    }

    return (
        <div>
            <Banner></Banner>

            <section className='trust-section'>
                <div className='container'>
                    <h1>Global Brands that Trust Us</h1>
                    <Vertical />
                </div>
            </section>

            <section className='subscribe'>
                <div className='container'>
                    <h2>Subscribe to a dedicated design team for your growing business needs.
                        Create unlimited projects at no extra cost.</h2>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={require('../../assets/images/icon1.png')} />
                            <h3>Unlimited <br />designs</h3>
                        </div>
                        <div className='col-md-3'>
                            <img src={require('../../assets/images/icon2.png')} />
                            <h3>Unlimited revisions</h3>
                        </div>
                        <div className='col-md-3'>
                            <img src={require('../../assets/images/icon3.png')} />
                            <h3>24-48 hr turnaround time</h3>
                        </div>
                        <div className='col-md-3'>
                            <img src={require('../../assets/images/icon4.png')} />
                            <h3>No contract. Cancel anytime</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section className='create'>
                <div className='container'>
                    <div className='create-text'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h1>Create. Edit. <br />Receive. Repeat.</h1>
                            </div>
                            <div className='col-md-6'>
                                <p>Direct access to a specialized team of creative experts
                                    makes for 10 times more efficient results. No long mail
                                    chains, no more slow-moving agency process, no more
                                    management complexity. You’ll always have a single
                                    point-of-contact from the team, and every development will
                                    be transparent, organized, and seamlessly managed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='create-details'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={require('../../assets/images/create_icon1.png')} />
                                <div className='sub-title'>Start with submitting unlimited
                                    design requests on our platform</div>
                            </div>
                            <div className='col-md-4'>
                                <img src={require('../../assets/images/create_icon2.png')} />
                                <div className='sub-title'>Receive your design within 24-48 hrs
                                    and get as many revisions done on your project</div>
                            </div>
                            <div className='col-md-4'>
                                <img src={require('../../assets/images/create_icon3.png')} />
                                <div className='sub-title'>Give approval on final draft once you’re
                                    satisfied and get the open source files for your projects right away</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='experienced'>
                <div className='container'>
                    <h1>We’re <span>experienced</span>. We’re <span>quick</span>.
                        We’re <span>Direct</span>. And we’re hell-of-a-lot creative.</h1>
                    <p>When we say Infinite Creative Possibilities, we mean it. From Print Design,
                        Packaging, Branding, to Emailers, Newsletters, & Digital.
                        From Stop-motion Animation, Food CGI, to AR Filters & Games.
                        We bring together experts in each discipline so you get a complete
                        team for all your creative requirements. </p>

                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">PACKING</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">PRINT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">DIGITAL</button>
                        </li>

                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-four-tab" data-bs-toggle="pill" data-bs-target="#pills-four" type="button" role="tab" aria-controls="pills-four" aria-selected="false">3D/CG</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-five-tab" data-bs-toggle="pill" data-bs-target="#pills-five" type="button" role="tab" aria-controls="pills-five" aria-selected="false">IMMERSIVE</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-six-tab" data-bs-toggle="pill" data-bs-target="#pills-six" type="button" role="tab" aria-controls="pills-six" aria-selected="false">ANNIMATION</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className='tab-slide'>
                                <TabSlider />
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">2</div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">3</div>
                        <div class="tab-pane fade" id="pills-four" role="tabpanel" aria-labelledby="pills-four-tab">4</div>
                        <div class="tab-pane fade" id="pills-five" role="tabpanel" aria-labelledby="pills-five-tab">5</div>
                        <div class="tab-pane fade" id="pills-six" role="tabpanel" aria-labelledby="pills-six-tab">6</div>

                    </div>
                </div>
            </section>
            <Services></Services>
            <TestimonialSlide />
            <Faq></Faq>
            <Demo></Demo>
            


        </div>
    )
}

export default Home
