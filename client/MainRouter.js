import React, { Component, Fragment, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/collection/Partials/Header';
import VideosByProfile from './components/collection/VideosByProfile'
import Profiles from './components/collection/Profiles';
import Websites from './components/collection/Websites';
import AllVideos from './components/collection/Videos/List'

class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
			   <Header/>
			   <Router>
					<Switch>
						<Route exact path="/" component={AllVideos}/>
						<Route exact path="/models" component={Profiles}/>
						<Route exact path="/models/:id" component={VideosByProfile}/>
						<Route exact path="/websites" component={Websites}/>
						<Route exact path="/websites/:id" component={AllVideos}/>
					</Switch>
			   </Router>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;