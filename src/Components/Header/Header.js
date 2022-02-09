import React from 'react'
import './header.css'
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <header className='web-menu'>
                <div className='header-container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div class="logo">
                                <a href='#'><img src={Logo} /></a>
                            </div>
                        </div>
                        <div className='col-md-9'>
                            <ul class="menu">
                                <li><a href="#">HOW WE WORK</a></li>
                                <li><a href="#">OUR PORTFOLIO</a></li>
                                <li><a href="#">PRICING</a></li>
                                <li><a href="#">SERVICES</a></li>
                                <li><a href="#">ABOUT</a></li>
                                {/* <li><a href="#">LOGIN / SIGNUP</a></li> */}
                                <li><Link to="/client">LOGIN / SIGNUP</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <header className='mobile-menu'>
                <div className='header-container'>
                    <div class="menu-content">
                        <div class="logo">
                            <a href='#'><img src={Logo} /></a>
                        </div>

                        {/* <a href='#' className='sign-btn'>LOGIN / SIGNUP</a> */}
                        <nav>
                            <input type="checkbox" id="hamburger1" />
                            <label for="hamburger1"></label>

                            <ul class="nav-links">
                                <li class=""><a href="#">HOW WE WORK</a></li>
                                <li class="active"><a href="#">OUR PORTFOLIO</a></li>
                                <li class=""><a href="#">PRICING</a></li>
                                <li class=""><a href="#">SERVICES</a></li>
                                <li class=""><a href="#">ABOUT</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header
