import React, { Component } from 'react'
import SocialLinks from './SocilaLinks';

class MenuModel extends Component {
    render() {
        return (

            <div className="modal right fade" id="DomainModal" tabIndex="-1" role="dialog" aria-labelledby="DomainModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>

                        <div className="modal-body">
                            <div className="modal__content">
                                <a className="navbar-brand"> <span>I’m shivam pathak </span></a>
                                {/*  <!-- if logo is image enable this
            <h2 className="logo">
              <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            </h2> --> */}
                                <p className="mt-md-3 mt-2">I Would Love to make your Ideas real. Contact me and we will discuss your projects!
                                </p>

                                <img src="assets/images/banner.png" alt="" className="img-fluid mt-5" />

                                <div className="widget-social-icons mt-sm-5 mt-4">
                                    <ul className="icon-rounded address">
                                        <li className="mt-3">
                                            <p><a href="tel:+91-9889347062">+91-9889347062</a></p>
                                        </li>
                                        <li className="mt-2">
                                            <p><a href="mailto:shivamp@hcl.com">shivamp@hcl.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget-social-icons mt-sm-5 mt-4">
                                    <SocialLinks/>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </div>

        );
    }
}
export default MenuModel;