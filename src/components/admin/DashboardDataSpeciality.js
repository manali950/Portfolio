import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { deleteProfile } from '../../actions/BannerAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class DashboardDataSpeciality extends Component {
    // delete =(id) =>{
    //     if(window.confirm("Are u want to sure ?")){
    //         fireDb.child(`banner/${id}`).remove(id);
    //     }


    // };
    onDelete = (id) => {
        console.log("delete" + id);
        this.props.deleteProfile(id);
    };
    render() {
        const { arrs } = this.props
        return (
            <div className="card-body">
                <div className='callout callout-success'>
                    <h4>{arrs.skill1}</h4>
                </div>
                <div className='callout callout-success'>
                <h4>{arrs.skill2}</h4>
                </div>
                <div className='callout callout-info'>
                    <h4>{arrs.skill3}</h4>
                </div>
                <div className='callout callout-info'>
                    <h4>{arrs.skill4}</h4>
                </div>
                <div className='callout callout-info'>
                    <h4>{arrs.skill5}</h4>
                </div>
                <div className='callout callout-warning'>
                    <h4>{arrs.skill6}</h4>
                </div>

            </div>
        )
    }
};
DashboardDataSpeciality.propTypes = {
    deleteProfile: PropTypes.func.isRequired,

};

export default connect(null, { deleteProfile })(DashboardDataSpeciality);
