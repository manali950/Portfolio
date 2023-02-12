import React, { Component } from 'react'

const HomeFeedback = () => {
    
        
        return (
            <section className="w3l-clients" id="testimonials">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-6 align-self">
                                <div className="position-relative px-lg-5">
                                    <img src="assets/images/clients.png" alt="" className="radius-image img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <span className="text">FeedBack</span>
                                <h3 className="title-big">What my <span>clients think</span> about Me</h3>
                                <div id="owl-demo1" className="owl-carousel owl-theme mt-4 py-2 mb-4">
                                    <div className="item">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <blockquote>
                                                    <q>dedicated and passionate for Work &#128527; &#128527; &#128527;</q>
                                                </blockquote>
                                                <div className="testi-des">
                                                    <div className="test-img"><img src="assets/images/cp.jpeg" className="img-fluid"
                                                        alt="client-img"/>
                                                    </div>
                                                    <div className="peopl align-self">
                                                        <h3>C.P Sharma</h3>
                                                        <p className="indentity">Lijap - Manager</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <blockquote>
                                                <q>keep Growing &#128522; &#128522; &#128522; &#128522;</q>
                                                </blockquote>
                                                <div className="testi-des">
                                                    <div className="test-img"><img src="assets/images/manvendra.jpg" className="img-fluid"
                                                        alt="client-img"/>
                                                    </div>
                                                    <div className="peopl align-self">
                                                        <h3>Manvendra Gautham</h3>
                                                        <p className="indentity">Gate Academy, Founder</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-content">
                                            <div className="testimonial">
                                                <blockquote>
                                                <q>my good choice &#128512; &#128512; &#128512; &#128512; &#128512; &#128512; &#128512;</q>
                                                </blockquote>
                                                <div className="testi-des">
                                                    <div className="test-img"><img src="assets/images/rahul.jpg" className="img-fluid"
                                                        alt="client-img"/>
                                                    </div>
                                                    <div className="peopl align-self">
                                                        <h3>Rahul Gupta</h3>
                                                        <p className="indentity">Zindagi Trip, Founder</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    
}
export default HomeFeedback;