import React, {Component, Fragment, Suspense, lazy } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
const Websites = lazy(() => import('./List'));

class Sidebar extends Component{
    state = {
        websites : []
    }
    componentDidMount(){
        this.props.dataByProfile({}, ()=>{
            this.setState((preState)=>({
                websites: [...preState.websites, ...this.props.listOfDataByProfile.websites]
            }))
        });
    }
    render(){
      	return(
            <div className="layout-row flex">
                <div className="flex" ref={this.scrollContainer}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Websites OnWebsitesList={this.state.websites}/>
                    </Suspense>
                </div>
            </div>
      	 )
      }
}

export default connect(state=>state, actions)(Sidebar);
