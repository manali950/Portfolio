import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContact } from './../../actions/BannerAction';
import PropTypes from "prop-types";

class HomeContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactId: Math.floor(Math.random() * 1000),
            contactName: "",
            contactEmail: "",
            contactSubject: "",
            contactMessage: "",


        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        //  console.log(event.target.value);
        // this.setState({ projectName : event.target.value });
        // this is destructuring in ES 6
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newContact = {
         //   "contactId": this.state.contactId,
            "contactName": this.state.contactName,
            "contactEmail": this.state.contactEmail,
            "contactSubject": this.state.contactSubject,
            "contactMessage": this.state.contactMessage,

        };
        console.log('---New newContact---', newContact);
        //Backend Call
        this.props.createContact(newContact, this.props.history);

    }
    render() {
        return (
            <section className="w3l-contactblock" id="contact">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-4 py-md-3">
                        <div className="contact-heading text-center">
                            <span className="text">Get in touch with Me </span>
                            <h3 className="title-big">Are you ready to <span>work together?</span></h3>
                            <p className="mt-4">Let's start a Project! Hire Me.</p>
                        </div>
                        <div className="row mt-md-5 mt-4 pt-lg-3">
                            <div className="col-lg-5">
                                <p>I’m open to any communication! Feel free to contact me any convenient way!
                                    I’m always interested in hearing about new projects and opportunities.
                                </p>
                                <ul className="address mt-md-5 mt-4">
                                    <li className="mb-3">
                                        <p><span className="fa fa-phone"></span> <a href="tel:+91-9889347062">+91-9889347062</a></p>
                                    </li>
                                    <li className="mb-4">
                                        <p><span className="fa fa-envelope-open"></span> <a href="mailto:shivamp@hcl.com">shivamp@hcl.com</a></p>
                                    </li>
                                    <li className="">
                                        <p><span className="fa fa-map-marker"></span> #301, Kuber Complex, <br />Gwalior 474001, IND.</p>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-lg-7 mt-lg-0 mt-md-5 mt-4">
                                <form onSubmit={this.onSubmit} >
                                    <div className="twice-two">
                                        <input type="hidden" className="form-control"
                                            name='id'
                                            value={this.state.id}
                                            onChange={this.onChange}
                                        />
                                        <input type="text" className="form-control" placeholder="Name" required=""
                                            name='contactName'
                                            value={this.state.contactName}
                                            onChange={this.onChange}
                                        />
                                        <input type="email" className="form-control" placeholder="Email" required=""
                                            name='contactEmail'
                                            value={this.state.contactEmail}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="twice">
                                        <input type="text" className="form-control" placeholder="Subject" required=""
                                            name='contactSubject'
                                            value={this.state.contactSubject}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <textarea className="form-control" placeholder="Message" required=""
                                        name='contactMessage'
                                        value={this.state.contactMessage}
                                        onChange={this.onChange}


                                    ></textarea>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-secondary btn-style mt-4">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};



HomeContact.propTypes = {
    createContact: PropTypes.func.isRequired,

};
const mapStateToProps = (state) => ({
    contacts: state.contacts,
});


export default connect(mapStateToProps, { createContact })(HomeContact);
