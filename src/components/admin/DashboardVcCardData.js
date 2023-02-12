import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DashboardVcCardData extends Component {
    render() {
        const { vcData } = this.props;

        return (
            <div className="card-body" >
                <div className='callout callout-info'>
                    <div className='row col-md-12'>
                        <div className='col-md-10'>
                            <h4 ><i class='fa fa-address-card' style={{ fontSize: "26px" }}>  Visiting Card Details </i></h4>
                            <p className="text-sm text-danger">Read below</p>
                            <p className="text-sm text-warning">You can change Here only reminer the length of data should be short</p>
                        </div>
                        <div className='col-md-1'>
                            <Link to={`/AdminCardUpdate/${vcData.id}`} className="btn btn-app"  >
                                <i className="fa fa-edit" ></i> Edit
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col'>
                                <h5>{vcData.cardName}</h5><hr />
                            </div>
                            <div className='col'>
                                <h5>{vcData.cardDesignation}</h5><hr />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h5>{vcData.cardEmail}</h5><hr />
                            </div>
                            <div className='col'>
                                <h5>{vcData.cardPhone}</h5><hr />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <h5>{vcData.cardSkill}</h5><hr />
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}
