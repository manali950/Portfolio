import React, { Component } from 'react';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';


import CommonIndexing from './layouts/CommonIndexing';
import Footer from './layouts/Footer';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/BannerAction';
import PropTypes from "prop-types";


class AdminProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
           // profileId: Math.floor(Math.random() * 1000),
            profileName: "",
            profileDesignation : "",
            profileImg : "",
            skill1: "",
            skill2: "",
            skill3: "",
            skill4: "",
            skill5: "",
            skill6: "",
            
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        //  console.log(event.target.value);
        // this.setState({ projectName : event.target.value });
        // this is destructuring in ES 6
         this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        const newProfile = {
            //"profileId": this.state.profileId,
            "profileName": this.state.profileName,
            "profileDesignation":this.state.profileDesignation,
            "profileImg":this.state.profileImg,
            "skill1": this.state.skill1,  
            "skill2": this.state.skill2,  
            "skill3": this.state.skill3,  
            "skill4": this.state.skill4,  
            "skill5": this.state.skill5,  
            "skill6": this.state.skill6,  
            
        };
        console.log('---New Project---',newProfile);
        //Backend Call
        this.props.createProfile(newProfile, this.props.history);

    }
    render(){
    return (
        <body className='hold-transition sidebar-mini'>
            <div className="wrapper">

                <Header />
                <SideBar />
                <div className="content-wrapper">
                    <CommonIndexing banner="Banner" />
                    <section className="content">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Banner</h3>

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
                                        <h3 className="card-title">Add Profile Details(Vision & services)</h3>
                                    </div>
                                    
                                    <form role="form" onSubmit={this.onSubmit}>
                                        <div className="card-body">
                                        
                                            <div className="form-group">
                                                <label htmlFor="name">Service Profile Heading</label>
                                                <input type="text" className="form-control"
                                                placeholder="Enter Profile Heading name"
                                                name='profileName'
                                                value={this.state.profileName}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="designation">Profile Descrption</label>
                                                <textarea type="text" className="form-control" 
                                                placeholder="Profile Descrption"
                                                name='profileDesignation'
                                                value={this.state.profileDesignation}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="homeImg">Img For Home</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="bannerImg"
                                                        name='profileImg'
                                                        value={this.state.profileImg}
                                                        onChange={this.onChange}
                                                        />
                                                            <label className="custom-file-label" htmlFor="homeImg">Choose file</label>
                                                    </div>
                                                    {/*<div className="input-group-append">
                                                        <span className="input-group-text" id="bannerImg">Upload</span>
                                                    </div>
                                                    */}
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="skill1">skill1</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill1"
                                                        name='skill1'
                                                        value={this.state.skill1}
                                                        onChange={this.onChange}
                                                    />
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="skill2">skill2</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill2"
                                                        name='skill2'
                                                        value={this.state.skill2}
                                                        onChange={this.onChange}
                                                    />
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="skill3">skill3</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill3"
                                                        name='skill3'
                                                        value={this.state.skill3}
                                                        onChange={this.onChange}
                                                    />
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="skill4">skill4</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill4"
                                                        name='skill4'
                                                        value={this.state.skill4}
                                                        onChange={this.onChange}
                                                    />
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="skill5">skill5</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill5"
                                                        name='skill5'
                                                        value={this.state.skill5}
                                                        onChange={this.onChange}
                                                    />
                                            </div>
                                            <div className="form-group">
                                                    <label htmlFor="skill6">skill6</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill6"
                                                        name='skill6'
                                                        value={this.state.skill6}
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

    );
    }
}
AdminProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    
};


export default connect(null,{createProfile})(AdminProfile);
