import React, { Component } from 'react'
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import CommonIndexing from './layouts/CommonIndexing';
import Footer from './layouts/Footer';
import { createSocial } from '../../actions/BannerAction';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class AdminAddSocial extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socialName: "",
            socialDesignation: "",
            socialEmail: "",
            socialPhone: "",
            socialAddress: "",
            socialSelfIntro: "",
            socialLinkedin: "",
            socialfb: "",
            socialtw: "",
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
        const social = {
            "socialName": this.state.socialName,
            "socialDesignation": this.state.socialDesignation,           
            "socialEmail": this.state.socialEmail,
            "socialPhone": this.state.socialPhone,
            "socialAddress": this.state.socialAddress,
            "socialSelfIntro": this.state.socialSelfIntro,
            "socialLinkedin": this.state.socialLinkedin,
            "socialfb": this.state.socialfb,
            "socialtw": this.state.socialtw

        };
        console.log('---Socail Media---', social);
        //Backend Call
        this.props.createSocial(social, this.props.history);

    }
    render() {
        return (
            <body className='hold-transition sidebar-mini'>
                <div className="wrapper">

                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                        <CommonIndexing banner="Social" />
                        <section className="content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Social</h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                            <i className="fa fa-minus"></i></button>
                                        <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                            <i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Add Social Details</h3>
                                        </div>

                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="socialName">Name</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter name"
                                                        name='socialName'
                                                        value={this.state.socialName}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="designation">Designation</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Designation"
                                                        name='socialDesignation'
                                                        value={this.state.socialDesignation}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="socialEmail">Email</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Email"
                                                        name='socialEmail'
                                                        value={this.state.socialEmail}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="socialPhone">Phone</label>
                                                    <input type="number" className="form-control"
                                                        placeholder="Phone"
                                                        name='socialPhone'
                                                        value={this.state.socialPhone}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Address">Address</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Address"
                                                        name='socialAddress'
                                                        value={this.state.socialAddress}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Address">SelfIntro</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="SelfIntroduction about your self"
                                                        name='socialSelfIntro'
                                                        value={this.state.socialSelfIntro}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Linkedin</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Linkedin URL"
                                                        name='socialLinkedin'
                                                        value={this.state.socialLinkedin}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">FaceBook</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter FaceBook URL"
                                                        name='socialfb'
                                                        value={this.state.socialfb}
                                                        onChange={this.onChange}
                                                    />
                                                </div><div className="form-group">
                                                    <label htmlFor="name">Twiter</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Twiter URL"
                                                        name='socialtw'
                                                        value={this.state.socialtw}
                                                        onChange={this.onChange}
                                                    />
                                                </div>


                                            </div>


                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div className="card-footer">
                                    Social
                                </div>

                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </body>
        )
    }
}
AdminAddSocial.propTypes = {
    createSocial: PropTypes.func.isRequired,

};

export default connect(null, { createSocial })(AdminAddSocial);
