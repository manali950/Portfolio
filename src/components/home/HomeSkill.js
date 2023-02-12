import React, { Component } from 'react'
import HomeVisitingCard from './HomeVisitingCard';

import { getCards } from '../../actions/BannerAction';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class HomeSkill extends Component {

    componentDidMount() {
        this.props.getCards();
    }
    
    render() {
        const { vcDatas } = this.props.vcDatas;
        console.log(vcDatas);
    //     const vcData = {
    //         name : "Er.Shivam Pathak",
    //         designation : "Software Engineer HCL",
    //         Skills : "FrontEnd (React)/BackEnd (PhP,Java)",
   
    //    };
        return (
            <section className="w3l-homeblock2" id="skills">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="row">
                            <div className="col-lg-6 align-self">
                                <div className="position-relative px-lg-5 mx-lg-0 mx-md-5 image-padding">
                                    <img src="assets/images/skills.png" alt="" className="radius-image img-fluid"/>
                                        <div className="position-absolute-images">
                                            <img src="assets/images/file.png" className="img-fluid pos-img" alt="" />
                                            <img src="assets/images/file1.png" className="img-fluid pos-img1" alt="" />
                                            <img src="assets/images/file2.png" className="img-fluid pos-img2" alt="" />
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4">
                                <span className="text">My Featured Skills</span>
                                <h3 className="title-big">I’m using <span>top leading</span>
                                    design methods.</h3>
                                <p className="mt-4">I Specialize in Branding and Strategy, and am passionate about 
                                To Provide And Serve All Sections Of Society With Equality Through Outstanding Software Services, 
                                Compassion And Transparency And To Create Affordable Software Solution.
                                And I always ready to impress the audience with my Creativity, CV attached below </p>
                                <a href="Attachments/shivamPathakCseResume.pdf" download>
                                    <button className="btn"><i className="fa fa-download"></i> Download CV</button>
                                    {/*<HomeVisitingCard vcData={vcData} />*/}
                                    {vcDatas.map((vcData) => {
                                        return <HomeVisitingCard key={vcData.id} vcData={vcData} />;
                                    })}
                                </a>
                                <div className="skills-bars mt-5">
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">C , HTML , CSS , JS , JQUERY ,SQL</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">REACT (incl Hooks,Router,Redux)  &amp; PHP (CI,Laravel) -(MVC FrameWork)                                        
                                        </h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "75%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info">
                                        <h6 className="progress-tittle">OPPS , DBMS , OS , DATA STRUCTURE.</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "60%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-info mb-0">
                                        <h6 className="progress-tittle">Basic Java</h6>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "50%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
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
HomeSkill.propTypes = {

    getCards: PropTypes.func.isRequired,

    vcDatas: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    vcDatas: state.profiles,

});
export default connect(mapStateToProps, {  getCards })(HomeSkill);
