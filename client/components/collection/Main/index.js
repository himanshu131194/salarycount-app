import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import List from './List'
import _ from "lodash";

class Main extends Component{
    filters = {
        condition : { }
    }
    componentDidMount(){
        this.filters.condition.id = '5f7038746dd75df4e428927d';
        this.props.loadAllFilters(this.filters, ()=>{
            console.log(this.props);
        })
    }
    render(){
        return(
            <div className="container space-2 space-bottom-lg-3">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <div className="navbar-expand-lg navbar-expand-lg-collapse-block">
                    
                    <div id="sidebarNav" className="navbar-collapse collapse">
                        <div className="mt-5 mt-lg-0">
                            <h2 className="h4"><a className="text-inherit" href="#">Course Categories</a></h2>
                            {this.props.listOfFilters && this.props.listOfFilters.categories.map((category)=>{
                               return(
                                <a key={category._id} className="dropdown-item d-flex justify-content-between align-items-center px-0 text-capitalize" href="#">
                                    {category.name}
                                 <span className="badge bg-soft-secondary badge-pill">{category.count}</span>
                                </a>
                               )
                            })}
 
                            {/* <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                AI Programming with Python
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Computer Vision
                                <span className="badge badge-success badge-pill ml-1">New</span>
                            </a> */}
                            {/* <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Deep Learning
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Deep Reinforcement Learning
                                <span className="badge bg-soft-secondary badge-pill">18</span>
                            </a> */}
                            {/* <div className="collapse" id="collapseSectionOne">
                                <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                    Machine Learning
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                    Natural Language Processing
                                </a>
                            </div>
                            <a className="link link-collapse small font-size-1 font-weight-bold pt-1" data-toggle="collapse" href="#collapseSectionOne" role="button" aria-expanded="false" aria-controls="collapseSectionOne">
                                <span className="link-collapse-default">View more</span>
                                <span className="link-collapse-active">View less</span>
                                <span className="link-icon ml-1">+</span>
                            </a> */}
                        </div>
    
                        <div className="mt-5">
                            <h3 className="h4"><a className="text-inherit" href="#">Sub Catergories</a></h3>
                            {/* <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Business Analytics
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Data Analyst
                                <span className="badge badge-success badge-pill ml-1">New</span>
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Data Engineer
                            </a> */}
                            {this.props.listOfFilters && this.props.listOfFilters.subCategories.map((sub_category)=>{
                                return(
                                    <a key={sub_category._id} className="dropdown-item d-flex justify-content-between align-items-center px-0 text-capitalize" href="#">
                                        {sub_category.name}
                                        <span className="badge bg-soft-secondary badge-pill">{sub_category.count}</span>
                                    </a>
                                )
                            })}
                             {/* <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Data Visualization
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Predictive Analytics for Business
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Programming for Data Science
                            </a>  */}
                        </div>
    
                        <div className="mt-5">
                            <h3 className="h4"><a className="text-inherit" href="#">Programming and Development</a></h3>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                AI Programming with Python
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Android Basics
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Android Developer
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Blockchain
                                <span className="badge bg-soft-secondary badge-pill">4</span>
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                C++
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Front End Web Developer
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Java Developer
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                iOS
                                <span className="badge badge-success badge-pill ml-1">New</span>
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Intro to Programming
                            </a>
                            <div className="collapse" id="collapseSectionTwo">
                                <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                    Java Developer
                                </a>
                                <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                    React
                                </a>
                            </div>
                            <a className="link link-collapse small font-size-1 font-weight-bold pt-1" data-toggle="collapse" href="#collapseSectionTwo" role="button" aria-expanded="false" aria-controls="collapseSectionTwo">
                                <span className="link-collapse-default">View more</span>
                                <span className="link-collapse-active">View less</span>
                                <span className="link-icon ml-1">+</span>
                            </a>
                        </div>
    
                        <div className="mt-5">
                            <h3 className="h4"><a className="text-inherit" href="#">Cloud Computing</a></h3>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Cloud Developer
                                <span className="badge bg-soft-secondary badge-pill">9+</span>
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Cloud Dev Ops Engineer
                            </a>
                        </div>
    
                        <div className="mt-5">
                            <h3 className="h4"><a className="text-inherit" href="#">Business</a></h3>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Business Analytics
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Digital Marketing
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Marketing Analytics
                            </a>
                            <div className="collapse" id="collapseSectionThree">
                                <a className="nav-link" href="#">
                                    Predictive Analytics for Business
                                </a>
                            </div>
                            <a className="link link-collapse small font-size-1 font-weight-bold pt-1" data-toggle="collapse" href="#collapseSectionThree" role="button" aria-expanded="false" aria-controls="collapseSectionThree">
                                <span className="link-collapse-default">View more</span>
                                <span className="link-collapse-active">View less</span>
                                <span className="link-icon ml-1">+</span>
                            </a>
                        </div>
    
                        <div className="mt-5">
                            <h3 className="h4">
                                <a className="text-inherit" href="#">Career <span className="badge badge-success badge-pill ml-1">New</span></a>
                            </h3>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Applying to Jobs
                            </a>
                            <a className="dropdown-item d-flex justify-content-between align-items-center px-0" href="#">
                                Interviewing
                            </a>
                        </div>
                    </div>
    
                    </div>
                </div>
                <div className="col-lg-9">
                    <List/>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(state=>state, actions)(Main);
