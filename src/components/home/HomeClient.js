import React, { Component } from 'react'

export default class HomeClient extends Component {
    render() {
        return (
            <section className="w3l-homeblock3" id="clients">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="text">My Clients  </span>
                                <h3 className="title-big">Clients  and 
                                    <span> Collaborations.</span></h3>
                                <p className="mt-4">Over the past 5 years, I've been fortunate to work with and for people from some
                                    amazing organizations.</p>
                                <div className="reward-list mt-5">
                                    <div className="reward-item">
                                        <div className="reward-item-photo">0.1k+
                                        </div>
                                        <div className="reward-item-detail">
                                            <span className="reward-item-title">Total CLients</span>
                                            <p className="reward-item-descr">over 2 countries</p>
                                        </div>
                                    </div>
                                    <div className="reward-item">
                                        <div className="reward-item-photo">85%
                                        </div>
                                        <div className="reward-item-detail">
                                            <span className="reward-item-title">Sensitive feedback</span>
                                            <p className="reward-item-descr">For Design quality</p>
                                        </div>
                                    </div>
                                    <div className="reward-item">
                                        <div className="reward-item-photo">50+
                                        </div>
                                        <div className="reward-item-detail">
                                            <span className="reward-item-title">Trusted sponsers</span>
                                            <p className="reward-item-descr">Featued by top rankers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self text-center mt-lg-0 mt-md-5 mt-4">
                                <div className="images">
                                    <img src="assets/images/logo1.png" className="img-fluid" alt="" />
                                    <img src="assets/images/logo2.jpg" className="img-fluid" alt="" />
                                    <img src="assets/images/logo3.png" className="img-fluid" alt="" />
                                    <img src="assets/images/logo4.png" className="img-fluid" alt="" />
                                    <img src="assets/images/logo5.png" className="img-fluid" alt="" />
                                    <img src="assets/images/logo8.png" className="img-fluid" alt="" />
                                    <img src="assets/images/logo6.jpg" className="img-fluid" alt="" />
                                    <img src="assets/images/logo7.png" className="img-fluid" alt="" />
                                    <img src="assets/images/logo9.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
