import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'

class VideosList extends Component{
    componentDidMount(){
    }
    render(){
      	return(
               <div className="p-4">
                   <div className="row">
                       {this.props.OnProfilesList.length>0 && this.props.OnProfilesList.map((profile)=>(
                            <div className="col-4 col-sm-4 col-md-2">
                                <div className="list-item">
                                    <div className="">
                                        <a href="video.detail.html#258710574" className="ajax profiles-card">
                                            <img className="img-fluid" src={profile.profile_picture}/>
                                        </a>
                                    </div>
                                    <div className="list-content pt-2">
                                        <div className="list-body d-flex justify-content-between">
                                            <a href={"/models/"+profile._id} target="_blank" className="list-title title ajax h-1x text-capitalize" data-pjax-state="">{profile.name}</a>
                                            <span>{profile.videos_count}</span>
                                        </div>
                                        {/* <div className="list-footer"><div className="text-muted text-sm">Videos - {profile.total_videos_count}</div></div> */}
                                    </div>
                                </div>
                            </div>
                       ))}
                   </div>
               </div>
      	 )
      }
}

export default connect(state=>state, actions)(VideosList);