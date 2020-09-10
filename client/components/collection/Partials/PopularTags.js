import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";

class PopularTags extends Component{
      render(){
      	return(
          <Fragment>
			  <header className="page-header bg-white b-b bg-body">
				<div className="navbar navbar-expand-lg">
                <div className="">
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">big tits</button>
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">blonde</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">shaved</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">brunette</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">big ass</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">natural tits</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">milf</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">threesome</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">blow job</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">lesbian</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">bondage</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-uppercase" type="button">bdsm</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">rough sex</button> 
                    <button className="btn text-align-auto btn-white mr-2 text-capitalize" type="button">submission</button> 
                </div>
				</div>
			  </header>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(PopularTags);


