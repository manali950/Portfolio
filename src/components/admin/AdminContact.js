import React, { Component } from 'react';
import CommonIndexing from './layouts/CommonIndexing';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import { getContacts } from './../../actions/BannerAction';
import FooterScript from './layouts/FooterScript';
import Footer from './layouts/Footer';
import DashboardContactData from './DashboardContactData';



class AdminContact extends Component {
    componentDidMount() {
        
        this.props.getContacts();
    }
    render() {
    
       const { contacts } = this.props.contacts;
       
        

        //console.log(arr2); 
        return (
            <body className='hold-transition sidebar-mini'>
                <div className="wrapper">
                    {/*<h1 className={style.h1}>admin</h1>*/}
                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                        <CommonIndexing banner="Contact" />
                        <section className="content">
                            <div className="card">
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
                            </div>
                        </section>
                    </div>
                    <Footer />
                    <FooterScript />
                </div>
            </body>





        )
    }
};
AdminContact.propTypes = {
   
    getContacts: PropTypes.func.isRequired,
 
    contacts: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
   
    contacts: state.contacts,
});
export default connect(mapStateToProps, { getContacts })(AdminContact);
