import React, { Component } from 'react'
import SocialLinks from './layouts/SocilaLinks';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getProfiles  , getSocials } from '../../actions/BannerAction';

class HomeBanner extends Component {
    componentDidMount() {
        this.props.getProfiles();
        this.props.getSocials();
    }
    render() {
        const { profiles } = this.props.profiles;
        const { socials } = this.props.socials;
        console.log(socials);
        return (
            <section id="home" className="w3l-banner pb-5">
                <div className="container pb-md-3">
                    <div className="banner-wrapper text-center">
                        <div className="">
                            <span className="text">About Me</span>
                            {/*socials.map((social) => {
                                return <DashboardSocialData  key={social.email}  social={social} />;
                            })*/}
                            <h1 className="mb-4 title">Hello, <span className="type-js"><span className="text-js">I’m Er.shivam pathak</span></span><br/>
                                I’m working as Software Engineer.</h1>
                            <p className="mx-lg-5">I love <strong>Graphic design</strong> and <strong>solving a problem</strong> and have been working on my portfolio since 2019.
                                I Can give your business a new Creative start right away!
                            </p>
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-lg-auto col-md-10">
                                <img src="assets/images/banner.png" alt="" className="img-fluid mt-lg-5 mt-3"/>
                            </div>
                        </div>
                        <SocialLinks/>
                    </div>
                </div>
            </section>
        )
    }
}
HomeBanner.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    getSocials: PropTypes.func.isRequired,

    profiles: PropTypes.object.isRequired,
    socials: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    profiles: state.profiles,
    socials: state.socials,
});
export default connect(mapStateToProps, { getProfiles ,getSocials })(HomeBanner);