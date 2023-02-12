import React, { Component } from 'react'
import CommonIndexing from '../layouts/CommonIndexing';
import Footer from '../layouts/Footer';
import SideBar from '../layouts/SideBar';
import Header from '../layouts/Header';

import { connect } from 'react-redux';
import { updateProfile, getProfile } from '../../../actions/BannerAction';
import PropTypes from "prop-types";

class AdminProfileUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            profileId: "",
            profileName: "",
            profileDesignation: "",
            profileImg: "",
        }
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.getProfile(id);
        //this.props.getProfile();
    }
    componentWillReceiveProps(nextProps) {
        const {
            id,
           // profileId,
            profileName,
            profileDesignation,
            profileImg,
        } = nextProps.profile;
        this.setState({
            id,
          //  profileId,
            profileName,
            profileDesignation,
            profileImg,
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
        const updateProfile = {
            "id": this.state.id,
           // "profileId": this.state.profileId,
            "profileName": this.state.profileName,
            "profileDesignation": this.state.profileDesignation,
            "profileImg":"blank"
            //  "profileImg":this.state.profileImg


        };
        console.log('---update Project---', updateProfile.id);
        //Backend Call update project on createProject method its self
        //when id is provided , project will be updated otherwise created
        this.props.updateProfile(updateProfile, this.props.history);

    }

    render() {
        //  const { profiles } = this.props.profiles;
        //console.log(profiles);

        // for(const key in profiles){
        //     if (889===profiles[key].profileId) {
        //        this.state.profileId = profiles[key].profileId;
        //         this.state.profileName = profiles[key].profileName;
        //         this.state.profileDesignation = profiles[key].profileDesignation;
        //         //this.state.profileImg = profiles[key].profileImg;
        //     }  

        // } 
        return (
            <body className='hold-transition sidebar-mini'>
                <div className="wrapper">

                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                        <CommonIndexing banner="UpdateBanner" />
                        <section className="content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">AdminProfileUpdate</h3>

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
                                            <h3 className="card-title">Update Profile Details</h3>
                                        </div>

                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="name">id</label>
                                                    <input type="text" className="form-control"

                                                        name='id'
                                                        value={this.state.id}

                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter name"
                                                        name='profileName'
                                                        value={this.state.profileName}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="designation">Designation</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Designation"
                                                        name='profileDesignation'
                                                        value={this.state.profileDesignation}
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
                                    Profile
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
AdminProfileUpdate.propTypes = {
    // getBanner: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    updateProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,

};
const mapStateToProps = (state) => ({
    // banner: state.banners.banner,
    profile: state.profiles.profile,
});

// export default connect(mapStateToProps,{getBanner,createProfile})(AdminBannerUpdate);
export default connect(mapStateToProps, { getProfile, updateProfile })(AdminProfileUpdate);
