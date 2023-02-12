import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { deleteProfile } from '../../actions/BannerAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class DashboardData extends Component {
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
                <div className='callout callout-info'>
                    <div className='row'>

                        <div className='col-md-7'>
                            <h5 >{arrs.id}.  <strong>Heading : -</strong>{arrs.profileName}</h5>
                            <p className="text-sm"><strong>Description : -</strong>{arrs.profileDesignation}</p>
                        </div>
                        <div className='col-md-3'>
                            <div className="position-relative">
                                <img src={arrs.profileImg} alt="{arrs.profileImg}" className="radius-image img-fluid" />
                            </div>
                        </div>

                        <div className='col-md-1'>
                            <Link to={`/AdminProfileUpdate/${arrs.id}`} className="btn btn-app"  >
                                <i className="fa fa-edit" ></i> Edit
                            </Link>
                            <li className="btn btn-app" onClick={this.onDelete.bind(this, arrs.id)}  >
                                <i className="fa fa-trash" ></i> Delete
                            </li>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
};
DashboardData.propTypes = {
    deleteProfile: PropTypes.func.isRequired,

};

export default connect(null, { deleteProfile })(DashboardData);
