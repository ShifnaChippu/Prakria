import React from 'react'
import './footer.css'
import Logo from '../../assets/images/footer_logo.svg';

function Footer() {
    return (
        <div>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <a href='#'><img src={Logo} /></a>
                            <p className='foot-text'>Subscribe to our blog</p>
                            <ul className='social-media'>
                                <li><a href='#' className='facebook'><img src={require('../../assets/images/facebook.png')} /></a></li>
                                <li><a href='#'><img src={require('../../assets/images/insta.png')} /></a></li>
                                <li><a href='#'><img src={require('../../assets/images/whatsapp.png')} /></a></li>
                                <li><a href='#'><img src={require('../../assets/images/linked.png')} /></a></li>
                            </ul>
                            <div class="footer-mail">
                                <input placeholder="Email" type="email"/>
                                <button class="submit-btn" type="submit" value="Submit">Sign Up</button>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='footer-menu'>
                                <h5>Explore</h5>
                                <ul>
                                    <li><a href='#'>How We Work</a></li>
                                    <li><a href='#'>Portfolio</a></li>
                                    <li><a href='#'>Pricing</a></li>
                                    <li><a href='#'>Services</a></li>
                                    <li><a href='#'>About</a></li>
                                </ul>
                            </div>  

                            <div className='footer-menu'>
                                <h5>Inquire</h5>
                                <ul>
                                    <li><a href='#'>Contact Us</a></li>
                                    <li><a href='#'>Join The Team</a></li>
                                </ul>
                            </div>  

                            <div className='footer-menu'>
                                <h5>Services</h5>
                                <ul>
                                    <li><a href='#'>Print</a></li>
                                    <li><a href='#'>Digital</a></li>
                                    <li><a href='#'>Presentation</a></li> 
                                </ul>
                            </div> 

                            <div className='footer-menu'>
                                <h5>Work With Us</h5>
                                <ul>
                                    <li><a href='#'>Subscription</a></li>  
                                    <li><a href='#'>Single Project</a></li>
                                    <li><a href='#'>Partner With Us</a></li> 
                                </ul>
                            </div>

                            <div className='footer-menu left-margin'>
                            <button class="login-btn" type="submit" value="Submit">Log in</button>
                            </div>

                        </div>
                    </div>
                    <div className='copyright'>
                        <ul>
                            <li>© Prakria Direct | 2021 We love our users!</li>
                            <li><a href='#'>Terms, Privacy Policy</a></li>
                            <li>Designed by XYZ</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
