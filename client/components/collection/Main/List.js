import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import _ from "lodash";

class List extends Component{
      render(){
      	return(
          <Fragment>
            <div className="border-bottom pb-3 mb-5">
                  <div className="row justify-content-md-start align-items-md-center">
                      <div className="col-md-4 mb-3 mb-md-0">
                        <p className="font-size-1 mr-md-auto mb-0"><span className="text-dark font-weight-bold">195 courses</span> to get started</p>
                      </div>
                      <div className="col-md-8 text-md-right">
                      </div>
                  </div>
            </div>
                {/* COURSE CARD */}
                <a className="d-block border-bottom pb-5 mb-5" href="course-description.html">
                    <div className="row mx-md-n2">
                        <div className="col-md-4 px-md-2 mb-3 mb-md-0">
                        <div className="position-relative">
                            <img className="img-fluid w-100 rounded" src="https://gostreamlabs.com/front/assets/svg/components/graphics-1.svg" alt="Image Description"/>

                            <div className="position-absolute top-0 left-0 mt-3 ml-3">
                            <small className="btn btn-xs btn-success btn-pill text-uppercase shadow-soft py-1 px-2 mb-3">Bestseller</small>
                            </div>

                            <div className="position-absolute bottom-0 left-0 mb-3 ml-4">
                            <div className="d-flex align-items-center flex-wrap">
                                <ul className="list-inline mt-n1 mb-0 mr-2">
                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                <li className="list-inline-item mx-0"><img src="https://gostreamlabs.com/front/assets/svg/illustrations/star.svg" alt="Review rating" width="14" /></li>
                                </ul>
                                <span className="d-inline-block">
                                <small className="font-weight-bold text-white mr-1">4.91</small>
                                <small className="text-white-70">(1.5k+ reviews)</small>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-8">
                        <div className="media mb-2">
                            <div className="media-body mr-7">
                            <h3 className="text-hover-primary">Complete Python Bootcamp: Go from zero to hero in Python 3</h3>
                            </div>

                            <div className="d-flex mt-1 ml-auto">
                            <div className="text-right">
                                <small className="d-block text-muted text-lh-sm"><del>$114.99</del></small>
                                <span className="d-block h5 text-primary text-lh-sm mb-0">$99.99</span>
                            </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-start align-items-center small text-muted mb-2">
                            <div className="d-flex align-items-center">
                            <div className="avatar-group">
                                <span className="avatar avatar-xs avatar-circle" data-toggle="tooltip" data-placement="top" title="" data-original-title="Nataly Gaga">
                                <img className="avatar-img" src="https://gostreamlabs.com/front/assets/img/100x100/img1.jpg" alt="Image Description" />
                                </span>
                            </div>
                            </div>
                            <div className="ml-auto">
                            <i className="fa fa-book-reader mr-1"></i>
                            10 lessons
                            </div>
                            <span className="text-muted mx-2">|</span>
                            <div className="d-inline-block">
                            <i className="fa fa-clock mr-1"></i>
                            3h 25m
                            </div>
                            <span className="text-muted mx-2">|</span>
                            <div className="d-inline-block">
                            <i className="fa fa-signal mr-1"></i>
                            All levels
                            </div>
                        </div>

                        <p className="font-size-1 text-body mb-0">Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!</p>
                        </div>
                    </div>
                    </a>
                {/* END COURSE CARD */}
          </Fragment>
        )
      }
}

export default connect(state=>state, actions)(List);


