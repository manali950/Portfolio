import React, { Component } from 'react'

export default class HomeAward extends Component {
    render() {
        return (
            <section className="w3l-homeblock3" id="awards">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="text">My Awards and Achievements </span>
                                <h3 className="title-big">Professional Certification and
                                    honors <span> I’ve reached.</span></h3>
                                <p className="mt-4">Awards. Having 02 Years of Experience that Motivated by the Desire to
                                    achieve Success </p>
                                <div className="reward-list mt-5">
                                <div className="reward-item">
                                        <div className="reward-item-photo"><img src="assets/images/banner.png" alt="" className="img-fluid"/></div>
                                        <div className="reward-item-detail">
                                            <span className="reward-item-title">Jr.Software Engineer</span>
                                            <p className="reward-item-descr">For Best Project Design & Development</p>
                                        </div>
                                    </div>
                                    <div className="reward-item">
                                        <div className="reward-item-photo"><img src="assets/images/skills.png" alt="" className="img-fluid"/></div>
                                        <div className="reward-item-detail">
                                            <span className="reward-item-title">Web design Certification</span>
                                            <p className="reward-item-descr">For Participants</p>
                                        </div>
                                    </div>
                                    <div className="reward-item">
                                        <div className="reward-item-photo"><img src="assets/images/banner.png" alt="" className="img-fluid"/></div>
                                        <div className="reward-item-detail">
                                            <span className="reward-item-title">C/C++ Programming certificate</span>
                                            <p className="reward-item-descr">For Most Loved Illustration </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-lg-6 align-self mt-lg-0 mt-md-5 mt-4">
                                <div className="position-relative px-lg-5 mx-lg-0 mx-md-5 image-padding">
                                    <img src="assets/images/awards.png" alt="" className="radius-image img-fluid"/>
                                        <div className="position-absolute-images">
                                            <img src="assets/images/award.png" className="img-fluid pos-img" alt="" />
                                            <img src="assets/images/award1.png" className="img-fluid pos-img1" alt="" />
                                            <img src="assets/images/award2.png" className="img-fluid pos-img2" alt="" />
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
