import React from 'react'
import './services.css'
function Services() {
    return (
        <div>

            <section className='sercices-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={require('../../assets/images/service_img1.png')} />
                            <div className='sercices-text'>
                                <div className='txt-out'>
                                    <h3>Subscription</h3>
                                    <p>Recommended for small and medium sized businesses</p>
                                    <button class="" type="submit" value="Submit">Subscribe Now</button>
                                </div>                                
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <img src={require('../../assets/images/service_img2.png')} />
                            <div className='sercices-text'>
                                <div className='txt-out'>
                                <h3>Single Project</h3>
                                <p>Best suited for first time users or businesses with irregular design needs</p>
                                <button class="" type="submit" value="Submit">Request a Quote</button>
                            </div></div>
                        </div>
                        <div className='col-md-4'>
                            <img src={require('../../assets/images/service_img3.png')} />
                            <div className='sercices-text'>
                            <div className='txt-out'>
                                <h3>Partner With Us</h3>
                                <p>Best suited for companies with bulk and unique 
                                    design requirements</p>
                                <button class="" type="submit" value="Submit">Partner benefits</button>
                            </div></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services
