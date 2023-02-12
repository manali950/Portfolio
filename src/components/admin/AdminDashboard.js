import React, { Component, Fragment } from 'react';
import CommonIndexing from './layouts/CommonIndexing';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getProfiles, getContacts, getSocials, getSkills ,getCards } from '../../actions/BannerAction';
import DashboardData from './DashboardData';

import DashboardContactData from './DashboardContactData';
import DashboardSocialData from './DashboardSocialData';
import DashboardSkillData from './DashboardSkillData';
import DashboardDataSpeciality from './DashboardDataSpeciality';
import DashboardVcCardData from './DashboardVcCardData';


class AdminDashboard extends Component {
    componentDidMount() {
        this.props.getProfiles();
        this.props.getContacts();
        this.props.getSocials();
        this.props.getSkills();
        this.props.getCards();
    }
    render() {
        const { profiles } = this.props.profiles;
        const { contacts } = this.props.contacts;
        const { socials } = this.props.socials;
        const { skills } = this.props.skills;
        const { vcDatas } = this.props.vcDatas;
     //   console.log(skills);
        //const arr = [];
        //  const arr2 = [];
        // for (const key in profiles) {
        //     arr.push({
          //        id: key,
        //         profileId: profiles[key].profileId,
        //         profileName: profiles[key].profileName,
        //         profileDesignation: profiles[key].profileDesignation,
        //         ProfileImg: profiles[key].profileImg,

        //     });

        // }

        // for (const key in contacts) {
        //     arr2.push({
        //         contactId: contacts[key].contactId,
        //         contactName: contacts[key].contactName,
        //         contactEmail: contacts[key].contactEmail,
        //         contactSubject: contacts[key].contactSubject,
        //         contactMessage: contacts[key].contactMessage,
        //     });

        // }


        return (



            <div className="content-wrapper">
                <CommonIndexing banner="Dashboard" />
                <section className="content">
                    {/* -----------------------Socail Data-------------------------------------- */}
                    <div className='row'>
                        <div className="card col-md-8">
                            <div className="card-header">
                                <h3 className="card-title">Socail Data</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                        <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>

                            {/*<DashboardSocialData social={socials} />*/}

                            {socials.map((social) => {
                                return <DashboardSocialData key={social.id} social={social} />;
                            })}


                            <div className="card-footer">
                                Socail
                            </div>

                        </div>

                        <div className='card col-md-4'>
                            <div className="card-header">
                                <h3 className="card-title"><i class="fa fa-text-width"></i> Services Speciality Data</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                        <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>

                            {/* Profile Vision & Services Data Skills />*/}
                            
                            {profiles.map((profile) => {
                                return <DashboardDataSpeciality key={profile.id} arrs={profile} />;
                            })}


                            <div className="card-footer">
                            Speciality
                            </div>
                        </div>
                    </div>
                    {/* -----------------------Profile Data-------------------------------------- */}
                    <div className='row'>
                        <div className="card col-md-6">
                            <div className="card-header">
                                <h3 className="card-title">Profile Vision & Services Data</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                        <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>

                            {profiles.map((profile) => {
                                return <DashboardData key={profile.id} arrs={profile} />;
                            })}
                            {vcDatas.map((vcData) => {
                                return <DashboardVcCardData key={vcData.id} vcData={vcData} />;
                            })}
                            
                            {/*Object.keys(profiles).map((arrs)=>{
                                return <DashboardData key={arrs.profileId}  arrs={arrs} />;
                            })*/}

                            <div className="card-footer">
                                Footer
                            </div>

                        </div>
                        {/* -----------------------Skills Data-------------------------------------- */}
                        <div className="card col-md-6">
                            <div className="card-header">
                                <h3 className="card-title">Skills Data</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                        <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>


                            {skills.map((skill) => {
                                return <DashboardSkillData key={skill.id} skill={skill} />;
                            })}


                            <div className="card-footer">
                                Socail
                            </div>
                        </div>
                    </div>

                    {/* -----------------------Contact Data-------------------------------------- */}
                    <div className='row'>
                        <div className="card col-md-12">
                            <div className="card-header">
                                <h3 className="card-title">Contact Data</h3>

                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                        <i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                        <i className="fa fa-times"></i></button>
                                </div>
                            </div>

                            {contacts.map((contact) => {
                                return <DashboardContactData key={contact.id} contact={contact} />;
                            })}



                            <div className="card-footer">
                                Footer
                            </div>

                        </div>
                    </div>
                </section>
            </div>






        )
    }
};
AdminDashboard.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    getContacts: PropTypes.func.isRequired,
    getSocials: PropTypes.func.isRequired,
    getSkills: PropTypes.func.isRequired,
    getCards: PropTypes.func.isRequired,

    profiles: PropTypes.object.isRequired,
    contacts: PropTypes.object.isRequired,
    socials: PropTypes.object.isRequired,
    skills: PropTypes.object.isRequired,
    vcDatas: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    profiles: state.profiles,
    contacts: state.contacts,
    socials: state.socials,
    skills: state.skills,
    vcDatas: state.profiles,
});
export default connect(mapStateToProps, { getProfiles, getContacts, getSocials, getSkills ,getCards })(AdminDashboard);
