import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DashboardSkillData extends Component {
    render() {
        const { skill } = this.props;

        return (
            <div className="card-body" >
                <div className=' callout-info'>
                    <div className='row col-md-12'>
                        <div className='col-md-10'>
                            <h5 >Skill Intro</h5>
                            <p className="text-sm">{skill.skillAbout}</p>
                        </div>
                        <div className='col-md-1'>
                            <Link to={`/AdminSkillUpdate/${skill.id}`} className="btn btn-app"  >
                                <i className="fa fa-edit" ></i> Edit
                            </Link>
                        </div>
                    </div>
                    <div className='row col-md-12'>
                        <div className='col-md-9'>
                            <h5 >{skill.skill1}</h5><hr />
                            <h5 >{skill.skill2}</h5><hr />
                            <h5>{skill.skill3}</h5><hr />
                            <h5>{skill.skill4}</h5><hr />
                        </div>
                        <div className='col-md-2'>
                            <h5 >{skill.skillRange1}%</h5><hr />
                            <h5>{skill.skillRange2}%</h5><hr />
                            <h5>{skill.skillRange3}%</h5><hr />
                            <h5>{skill.skillRange4}%</h5><hr />
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}
