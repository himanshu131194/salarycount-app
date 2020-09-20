import React, { Component, Fragment, Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/collection/Partials/Header';
import Main from './components/collection/Main';

class MainRouter extends Component{
	  render(){
	  	  return(
             <Fragment>
			   <Header/>
			   <Router>
					<Switch>
						<Route exact path="/" component={Main}/>
					</Switch>
			   </Router>
             </Fragment>
	  	  )
	  }
}

export default MainRouter;