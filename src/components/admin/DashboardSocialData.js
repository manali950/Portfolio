import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DashboardSocialData extends Component {
    render() {
        const { social } = this.props;
        const mystyle = {

            fontSize: "50px",
            color: " black!important",
            padding: "20px"
        };
        return (
            <div className="card-body" >
                <div className=' callout-info'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <dl class="dl-horizontal">
                                <dt>Name</dt>
                                <dd><h5 >{social.socialName}</h5></dd>

                                <dt>Designation</dt>
                                <dd><h5 >{social.socialDesignation}</h5></dd>

                                <dt>Contact</dt>
                                <dd><h5 >{social.socialEmail}</h5></dd>
                                <dd><h5 >{social.socialPhone}</h5></dd>

                                <dt>Address</dt>
                                <dd><h5 >{social.socialAddress}</h5>
                                </dd>
                            </dl>
                        </div>
                        <div className='col-md-2'>
                            <Link to={`/AdminSocialUpdate/${social.id}`} className="btn btn-app"  >
                                <i className="fa fa-edit" ></i> Edit
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-9'>
                            <dl class="dl-horizontal">
                                <dt>Address</dt>
                                <dd> <h5>{social.socialSelfIntro}</h5></dd>
                            </dl>
                        </div>
                        <div className='col-md-3'>
                            <a href={social.socialLinkedin}>
                                <i className="fa fa-facebook-square" style={mystyle} aria-hidden="true"></i>
                            </a>
                            <a href={social.socialfb}>
                                <i className="fa fa-linkedin-square" style={mystyle} aria-hidden="true"></i>
                            </a>
                            <a href={social.socialtw}>
                                <i className="fa fa-twitter-square" style={mystyle} aria-hidden="true"></i>
                            </a>

                        </div>


                    </div>
                </div>


            </div>
        )
    }
}
