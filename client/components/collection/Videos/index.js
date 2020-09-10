import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'

class VideosList extends Component{
    componentDidMount(){
        console.log(this.props);
    }
    getVideoDuration  = (time)=>{
        let getFormat = (t)=>(t<10) ? `0`+t.toString() : t;
        time = parseInt(time);
        let h=0, m=0, s=0;
        if(time>3600){
            h = parseInt(time/3600); m = parseInt(time%3600);
            if(m>60){
                s = parseInt(m%60); m = parseInt(m/60);
            }else
                s = parseInt(m);
        }else{
            m = parseInt(time%60); s = m > 0 ? m : 0;
            m = parseInt(time/60);
        }
        return (h===0) ? `${getFormat(m)}:${getFormat(s)}`: `${getFormat(h)}:${getFormat(m)}:${getFormat(s)}`;
    }
    properLink = (url)=>{
       return (url.match('sid')) ? url : url+"?sid=12320";
    }
    render(){
      	return(
               <div className="p-4">
                   <div className="row">
                       {this.props.OnVideosList.length>0 && this.props.OnVideosList.map((video)=>(
                            <div className="col-4 col-sm-4 col-md-3" key={video._id}>
                                <div className="list-item">
                                    <div className="media media-16x9">
                                        <a href="video.detail.html#258710574" className="ajax media-content" style={{"backgroundImage": `url(${video.poster_url})`}} data-pjax-state=""></a>
                                        <div className="media-overlay overlay-bottom">
                                            <a href="#"><span className="badge badge-md text-uppercase bg-dark-overlay">{this.getVideoDuration(video.total_duration)}</span></a>
                                        </div>
                                        <div className="media-action"></div>
                                    </div>
                                    <div className="list-content">
                                        <div className="list-body"><a href={this.properLink(video.source_url)} target="_blank" className="list-title title ajax h-1x" data-pjax-state="">{video.title}</a></div>
                                        <div className="list-footer"><div className="text-muted text-sm">{video.download_id ? "downloaed": "pending"}</div></div>
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
