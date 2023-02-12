import React, { Component } from 'react'

export default class HomeAbout extends Component {
    render() {
        return (
            <section className="w3l-homeblock1" id="about">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="text">My Vision & Services</span>
                                <h3 className="title-big"><span>VISION</span>  grow your business</h3>
                                <p className="mt-4">To Emerge As A World Class Institution For Providing Affordable And Equivalent Software Services
                                 And Facilities To All Sections Of Society. I Aspire To Become A Respected Name
                                  In Academics, Research And Innovation In Field Of Software.</p>
                                <ul className="service-list mt-md-5 mt-4">
                                    <li className="service-link"><a href="#">UI/UX Design and Development</a></li>
                                    <li className="service-link"><a href="#">BackEnd Development</a></li>
                                    <li className="service-link"><a href="#">Mobile App Design</a></li>
                                    <li className="service-link"><a href="#">Art, Logo, SVG & Illustration</a></li>
                                    <li className="service-link"><a href="#">Branding Design and Identity</a></li>
                                    <li className="service-link"><a href="#">Amimation Videos</a></li>
                                </ul>
                                <a href="#portfolio" className="btn btn-style btn-empty p-0">View my all services <span></span></a>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div className="position-relative">
                                    <img src="assets/images/user.jpg" alt="" className="radius-image img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
