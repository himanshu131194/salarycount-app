import React, {Component, Fragment} from 'react'
import PopularTags from './PopularTags'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";

class Header extends Component{
      render(){
      	return(
          <Fragment>
			  <header className="page-header bg-white bg-body sticky">
				<div className="navbar navbar-expand-lg">
					{/* logo */}
					<a  href="/" className="navbar-brand w w-auto-sm">
						<img src="https://notinmood.s3.ap-south-1.amazonaws.com/assets/logo/sex-logo1.png"/>
					</a>

					<div className="collapse navbar-collapse order-2 order-lg-1" id="navbarToggler">
						<form className="input-group m-2 my-lg-0">
							<div className="input-group-prepend">
								<button type="button" className="btn no-shadow no-bg px-0 text-inherit">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
										<circle cx="11" cy="11" r="8"></circle>
										<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
									</svg>
								</button>
							</div>
							<span style={{"position": "relative", "display": "inline-block"}} className="w-50">
							    <input type="text" className="form-control no-border no-shadow no-bg typeahead tt-input" placeholder="Search titles, profiles or websites..." data-api="../assets/api/menu.json" autoComplete="off" spellCheck="false" dir="auto" style={{"position": "relative", "verticalAlign": "top", "backgroundColor": "transparent"}} />
								
								<div className="dropdown-menu" style={{"position": "absolute", "top": "100%", "left": "0px", "zIndex": "100", "display": "none"}}>
									<div className="tt-dataset tt-dataset-36">
										{/* <a className="dropdown-item" href="#">
												<a href="#" className="item-author text-color">Benjamin Fields</a>
												<div className="item-except text-muted text-sm h-1x">Managing data in all software or applications becomes simplified when you make use of the best <a href="#">#DatabaseMan</a></div>
										</a> */}
										<div className="">
											<div className="d-flex justify-content-between padding-dropdown-title">
											     <span className="d-block font-weight-500">Titles</span>
												 <span className="item-amount d-none d-sm-block text-sm ml-4">120</span>
											</div>
											<a  href="/" className="d-flex dropdown-item">
												<span className="text-muted">Kink - 19 year old All Natural Slut Gets fucked</span>
											</a>
											<a  href="/" className="d-flex dropdown-item">
												<span className="text-muted">Wet Workout</span>
											</a>											
											<a  href="/" className="d-flex dropdown-item">
											    <span className="text-muted">Kink - Initiating Aleksa Nicole</span>
											</a>											
											<a  href="/" className="d-flex dropdown-item">
											    <span className="text-muted">FTV Girls - The Lookalikes' Sexy Nature 2</span>
											</a>											
										</div>
										<div className="dropdown-divider"></div>
										<div className="">
											<div className="d-flex justify-content-between padding-dropdown-title">
											     <span className="d-block font-weight-500">Profiles</span>
												 <span className="item-amount d-none d-sm-block text-sm ml-4">3</span>
											</div>
											<a  href="/" className="d-flex dropdown-item">
												<span className="text-muted">Aiden Starrbill</span>
											</a>
											<a  href="/" className="d-flex dropdown-item">
												<span className="text-muted">Baileyclaire</span>
											</a>											
											<a  href="/" className="d-flex dropdown-item">
											    <span className="text-muted">Robbinschristie</span>
											</a>											
											<a  href="/" className="d-flex dropdown-item">
											    <span className="text-muted">Stevens</span>
											</a>											
										</div>
										<div className="dropdown-divider"></div>
										<div className="">
											<div className="d-flex justify-content-between padding-dropdown-title">
											     <span className="d-block font-weight-500">Websites</span>
												 <span className="item-amount d-none d-sm-block text-sm ml-4">9</span>
											</div>
											<a  href="/" className="d-flex dropdown-item">
												<span className="text-muted">Teenfidelity.com</span>
											</a>
											<a  href="/" className="d-flex dropdown-item">
												<span className="text-muted">Nurumassage.com</span>
											</a>											
										</div>
									</div>
								</div>
							</span>
						</form>
					</div>
					<ul className="nav navbar-menu order-1 order-lg-2">
						<li className="nav-item">
							<div className="dropdown mr-lg-4">
								<button className="btn text-align-auto btn-white nav-link px-2 dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video mx-2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
									<span className="mr-1">videos</span>
								</button>
								<div className="dropdown-menu bg-dark" role="menu" x-placement="bottom-start" style={{"position": "absolute", "transform": "translate3d(0px, 34px, 0px)", "top": "0px", "left": "0px", "willChange": "transform"}}>
									<a className="dropdown-item">Newest</a>
									<a className="dropdown-item">Most Viewed</a>
									<a className="dropdown-item">Top Rated</a>
									{/* <div className="dropdown-divider"></div> */}
									{/* <a className="dropdown-item">Separated link</a> */}
								</div>
							</div>
						</li>
					    <li className="nav-item">
							<a href="/models" className="btn text-align-auto btn-white nav-link px-2 mr-lg-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users mx-2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
							pornstars
							</a>
						</li>
						<li className="nav-item">
							<a href="/websites" className="btn text-align-auto btn-white nav-link px-2 mr-lg-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor mx-2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
							websites
							</a>
						</li>					    
						<li className="nav-item">
							<a className="btn text-align-auto btn-white nav-link px-2 mr-lg-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag mx-2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
							tags
							</a>
						</li>					    
						<li className="nav-item d-none d-sm-block">
							<a className="nav-link px-2" data-toggle="fullscreen" data-pjax-state="">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize">
									<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			  </header>
			  <PopularTags/>
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(Header);


