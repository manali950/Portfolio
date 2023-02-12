import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DashboardContactData extends Component {
    render() {
        const { contact } = this.props
        return (
            <div className="card-body">
                <div className='callout callout-info'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <h5 >{contact.id}</h5>
                            <h5 >{contact.contactName}</h5>
                            <h5 >{contact.contactEmail}</h5>

                        </div>
                        
                        <div className='col-md-7'>
                            <p className="text-sm">{contact.contactSubject}</p>
                            <p className="text-sm">{contact.contactMessage}</p>
                        </div>

                        
                    </div>
                </div>


            </div>
        )
    }
}
