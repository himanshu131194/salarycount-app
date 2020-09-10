import React, {Component, Fragment } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class List extends Component{
    componentDidMount(){
    }
    render(){
      	return(
               <div className="p-4">
                   <div className="row">
                       {this.props.OnWebsitesList.length>0 && this.props.OnWebsitesList.map((website)=>(
                           <div class="col-6 col-sm-3 py-2">
                               <Link to={`/websites/${website.name}`} className="list-title title ajax h-1x text-capitalize pointer">{website.name} {`[${website.videos_count}]`}</Link>
                            </div>
                       ))}
                   </div>
               </div>
      	 )
      }
}

export default connect(state=>state, actions)(List);
