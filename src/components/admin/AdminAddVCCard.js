import React, { Component } from 'react'
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import CommonIndexing from './layouts/CommonIndexing';
import Footer from './layouts/Footer';

import { createCard } from '../../actions/BannerAction';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class AdminAddVCCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardName: "",
            cardDesignation: "",
            cardSkill: "",
            cardEmail: "",
            cardPhone: "",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        //  console.log(event.target.value);
        // this.setState({ projectName : event.target.value });
        // this is destructuring in ES 6
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const card = {
            "cardName": this.state.cardName,
            "cardDesignation": this.state.cardDesignation,
            "cardSkill": this.state.cardSkill,
            "cardEmail": this.state.cardEmail,
            "cardPhone": this.state.cardPhone

        };
        console.log('---Socail Media---', card);
        //Backend Call
      this.props.createCard(card, this.props.history);

    }
    render() {
        return (
            <body className='hold-transition sidebar-mini'>
                <div className="wrapper">

                    <Header />
                    <SideBar />
                    <div className="content-wrapper ">
                        <CommonIndexing banner="Card" />
                        <section className="content col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Visiring Card</h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                            <i className="fa fa-minus"></i></button>
                                        <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                            <i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Add Card Details</h3>
                                        </div>

                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="cardName">cardName</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter cardName"
                                                        name='cardName'
                                                        value={this.state.cardName}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="cardDesignation">cardDesignation</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="cardDesignation"
                                                        name='cardDesignation'
                                                        value={this.state.cardDesignation}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="cardSkill">cardSkill</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="cardSkill"
                                                        name='cardSkill'
                                                        value={this.state.cardSkill}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="cardEmail">cardEmail</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="cardEmail"
                                                        name='cardEmail'
                                                        value={this.state.cardEmail}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="cardPhone">cardPhone</label>
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter cardPhone"
                                                        name='cardPhone'
                                                        value={this.state.cardPhone}
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
                                Visiring Card
                                </div>

                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </body>
        )
    }
}
AdminAddVCCard.propTypes = {
    createCard: PropTypes.func.isRequired,

};

export default connect(null, { createCard })(AdminAddVCCard);
