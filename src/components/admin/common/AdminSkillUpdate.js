import React, { Component } from 'react'
import CommonIndexing from '../layouts/CommonIndexing';
import Footer from '../layouts/Footer';
import SideBar from '../layouts/SideBar';
import Header from '../layouts/Header';

import { connect } from 'react-redux';
import { updateSkill, getSkill } from '../../../actions/BannerAction';
import PropTypes from "prop-types";

class AdminSkillUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            skillAbout: "",
            skill1: "",
            skillRange1: "",
            skill2: "",
            skillRange2: "",
            skill3: "",
            skillRange3: "",
            skill4: "",
            skillRange4: "",
        }
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.getSkill(id);

    }
    componentWillReceiveProps(nextProps) {
        const {
            id,
            skillAbout,
            skill1,
            skillRange1,
            skill2,
            skillRange2,
            skill3,
            skillRange3,
            skill4,
            skillRange4,
        } = nextProps.skill;
        this.setState({
            id,
            skillAbout,
            skill1,
            skillRange1,
            skill2,
            skillRange2,
            skill3,
            skillRange3,
            skill4,
            skillRange4,
        });
    }
    onChange = (event) => {
        //  console.log(event.target.value);
        // this.setState({ projectName : event.target.value });
        // this is destructuring in ES 6
        this.setState({ [event.target.name]: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const updateSkill = {
            "id": this.state.id,
            "skillAbout": this.state.skillAbout,
            "skill1": this.state.skill1,
            "skillRange1": this.state.skillRange1,
            "skill2": this.state.skill2,
            "skillRange2": this.state.skillRange2,
            "skill3": this.state.skill3,
            "skillRange3": this.state.skillRange3,
            "skill4": this.state.skill4,
            "skillRange4": this.state.skillRange4
        };
        console.log('---update skills---', updateSkill);
        //Backend Call update project on createProject method its self
        //when id is provided , project will be updated otherwise created
        this.props.updateSkill(updateSkill, this.props.history);

    }

    render() {
        const { skill } = this.props.skill;
        console.log(skill);


        return (
            <body className='hold-transition sidebar-mini'>
                <div className="wrapper">

                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                        <CommonIndexing banner="Skills" />
                        <section className="content">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Social</h3>

                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                                            <i className="fa fa-minus"></i></button>
                                        <button type="button" className="btn btn-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                                            <i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Add Social Details</h3>
                                        </div>
                                        <form role="form" onSubmit={this.onSubmit}>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="id">id</label>
                                                    <input type="text" className="form-control"
                                                        name='id'
                                                        value={this.state.id}
                                                        disabled />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skillAbout">skillAbout</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="Enter skillAbout"
                                                        name='skillAbout'
                                                        value={this.state.skillAbout}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="designation">skill1</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="Designation"
                                                        name='skill1'
                                                        value={this.state.skill1}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skillRange1">skillRange1</label>
                                                    <input type="range" min="0" max="100" className="form-control"
                                                        placeholder="Enter Email"
                                                        name='skillRange1'
                                                        value={this.state.skillRange1}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skill2">skill2</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="Phone"
                                                        name='skill2'
                                                        value={this.state.skill2}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skillRange2">skillRange2</label>
                                                    <input type="range" min="0" max="100" className="form-control"
                                                        placeholder="skillRange2"
                                                        name='skillRange2'
                                                        value={this.state.skillRange2}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skill3">skill3</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="skill3"
                                                        name='skill3'
                                                        value={this.state.skill3}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skillRange3">skillRange3</label>
                                                    <input type="range" min="0" max="100" className="form-control"
                                                        placeholder="Enter skillRange3"
                                                        name='skillRange3'
                                                        value={this.state.skillRange3}
                                                        onChange={this.onChange}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="skill4">skill4</label>
                                                    <textarea type="text" className="form-control"
                                                        placeholder="Enter skill4"
                                                        name='skill4'
                                                        value={this.state.skill4}
                                                        onChange={this.onChange}
                                                    />
                                                </div><div className="form-group">
                                                    <label htmlFor="skillRange4">skillRange4</label>
                                                    <input type="range" min="0" max="100" className="form-control"
                                                        placeholder="Enter skillRange4 "
                                                        name='skillRange4'
                                                        value={this.state.skillRange4}
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
                                    Social
                                </div>

                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </body>
        )
    }
};
AdminSkillUpdate.propTypes = {
    getSkill: PropTypes.func.isRequired,
    updateSkill: PropTypes.func.isRequired,
    skill: PropTypes.object.isRequired,

};
const mapStateToProps = (state) => ({
    // banner: state.banners.banner,
    skill: state.profiles.skill,
});

export default connect(mapStateToProps, { getSkill, updateSkill })(AdminSkillUpdate);
