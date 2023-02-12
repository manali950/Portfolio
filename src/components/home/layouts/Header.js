import React, { Component } from 'react';

const Header = () => {
    console.log("header 1");
    const changeTheme =() =>{
        
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');

        console.log(toggleSwitch,currentTheme);

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
          
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
        
        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {        document.documentElement.setAttribute('data-theme', 'light');
                  localStorage.setItem('theme', 'light');
            }    
        }
        
        toggleSwitch.addEventListener('change', switchTheme, false);

        
    }

        return (

            <div>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light stroke">
                        <a className="navbar-brand" href="index.html">
                            <span>Portfolio HCL</span>
                        </a>
                        {/*<a className="navbar-brand" href="#index.html">
        <img src="image-path" alt="Your logo" title="Your logo" style={{height:"35px"}} />
        </a> */}
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa icon-expand fa-bars"></span>
                            <span className="fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">My Services</a>
                                </li>
                                <li className="nav-item dropdown @@blog__active">
                                    <a className="nav-link dropdown-toggle" href="#blocks" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Achievement <span className="fa fa-angle-down"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#skills">My Skills</a>
                                        <a className="dropdown-item" href="#awards">Awards </a>
                                        <a className="dropdown-item" href="#portfolio">My Portfolio</a>
                                        <a className="dropdown-item" href="#clients">Partners</a>
                                        <a className="dropdown-item" href="#testimonials">Testimonials</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#blocks" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        More <span className="fa fa-angle-down"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#blog-slider">Blog posts</a>
                                        <a className="dropdown-item" href="#contact">Contact</a>
                                        <a className="dropdown-item" href="/admin">Admin</a>
                                    </div>
                                </li>

                            </ul>
                        </div>


                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <div className="popup ml-auto">
                                <a href="#menu" className="domain" data-toggle="modal" data-target="#DomainModal">
                                    <div className="hamburger">
                                        <span className="top-bar"></span>
                                        <span className="middle-bar"></span>
                                        <span className="bottom-bar"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* toggle switch for light and dark theme */}
                        <div className="mobile-position ml-lg-2">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            
                                            <i onClick={changeTheme} className="gg-moon"></i>
                                            <i onClick={changeTheme} className="gg-sun"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/* toggle switch for light and dark theme */}
                    </nav>
                </div>
            </header>
            <div className="header-gap">
  
            </div>
            </div>



        );
    
}

export default React.memo(Header);
