import React, { Component } from 'react'
import CommonIndexing from '../layouts/CommonIndexing';
import Footer from '../layouts/Footer';
import SideBar from '../layouts/SideBar';
import Header from '../layouts/Header';

import { connect } from 'react-redux';
import { updateSocial, getSocial } from '../../../actions/BannerAction';
import PropTypes from "prop-types";

class AdminSocialUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
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
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.getSocial(id);

    }
    componentWillReceiveProps(nextProps) {
        const {
            id,
            socialName,
            socialDesignation,
            socialEmail,
            socialPhone,
            socialAddress,
            socialSelfIntro,
            socialLinkedin,
            socialfb,
            socialtw,
        } = nextProps.social;
        this.setState({
            id,
            socialName,
            socialDesignation,
            socialEmail,
            socialPhone,
            socialAddress,
            socialSelfIntro,
            socialLinkedin,
            socialfb,
            socialtw,
        });
    }
    onChange = (event) => {
        //  console.log(event.target.value);
        // this.setState({ projectName : event.target.value });
        // this is destructuring in ES 6
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const updateSocial = {
            "id": this.state.id,
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
        console.log('---update social---', updateSocial);
        //Backend Call update project on createProject method its self
        //when id is provided , project will be updated otherwise created
        this.props.updateSocial(updateSocial, this.props.history);

    }

    render() {
        const { social } = this.props.social;
        //console.log(profiles);


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
                                                    <label htmlFor="id">id</label>
                                                    <input type="text" className="form-control"
                                                        name='id'
                                                        value={this.state.id}
                                                        disabled />
                                                </div>
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
};
AdminSocialUpdate.propTypes = {
    getSocial: PropTypes.func.isRequired,
    updateSocial: PropTypes.func.isRequired,
    social: PropTypes.object.isRequired,

};
const mapStateToProps = (state) => ({
    // banner: state.banners.banner,
    social: state.profiles.social,
});

export default connect(mapStateToProps, { getSocial, updateSocial })(AdminSocialUpdate);
