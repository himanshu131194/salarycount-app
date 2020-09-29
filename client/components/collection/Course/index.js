import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
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
    onSelectCategory = (id)=>{
        // console.log(id);
        this.filters.condition.id = id;
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
                               let id = category._id;
                               return(
                                <a key={category._id} className="dropdown-item d-flex justify-content-between align-items-center px-0 text-capitalize" href="#" onClick={()=>{this.onSelectCategory(id)}}>
                                    {category.name}
                                 <span className="badge bg-soft-secondary badge-pill">{category.count}</span>
                                </a>
                               )
                            })}
                        </div>
    
                        <div className="mt-5">
                            <h3 className="h4"><a className="text-inherit" href="#">Sub Catergories</a></h3>
                            {this.props.listOfFilters && this.props.listOfFilters.subCategories.map((sub_category)=>{
                                return(
                                    <a key={sub_category._id} className="dropdown-item d-flex justify-content-between align-items-center px-0 text-capitalize" href="#">
                                        {sub_category.name}
                                        <span className="badge bg-soft-secondary badge-pill">{sub_category.count}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
    
                    </div>
                </div>
                <div className="col-lg-9">
                </div>
            </div>
        </div>
        )
    }
}

export default connect(state=>state, actions)(Main);
