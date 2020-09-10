import React, {Component, Fragment, Suspense, lazy } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import { Redirect, Link } from "react-router-dom";
const Videos = lazy(() => import('../Videos'));

class Sidebar extends Component{
    state = {
        videos: [],
        redirect: null,
        categoriesByWebsites: []
    };
    scrollContainer = React.createRef();
    defaultLimit = 24;
    defaultSkip = 24;
    counter = 0;
    filters = {
        category: {}, website: {}
    };
    profileId = null;
    currentURL = null;

    componentDidMount(){
        console.log("this is videos page loaded")
        // window.addEventListener('scroll', this.getScrollElement);
        const { match: { params: { id=null }, path }  } = this.props;
        this.currentURL = id;
        console.log(id, path);
        if(id && path.match('websites')){
            this.filters.website = { [id]: true }
        }else if(id && path.match('categories')){

        }
        // console.log(id);
        this.profileId = "5efdf8265ad8101040d1059e";
        let filters = { category: Object.keys(this.filters.category), website: Object.keys(this.filters.website)};

        this.loadVideosByProfile({condition: filters});

        this.props.dataByProfile({}, ()=>{
            console.log(this.props);
        });
    }

    loadVideosByProfile = (filters)=>{
        this.props.videosByProfile({ limit : this.defaultLimit, offset: this.counter, filters}, ()=>{
            const videos = this.props.listOfVideosByProfile ? this.props.listOfVideosByProfile : [];
            this.setState((preState)=>({
                videos: [...preState.videos, ...videos]
            }))
        });
    }

    filterVideos = (e)=>{
        this.counter = 0;
        this.setState({ videos: [] })
        const { website, category } = e.target.dataset;
        const className = e.target.className;
        
        const listOfEle = document.getElementsByClassName(className);
        if(className==='select-websites'){
            for(let x of listOfEle){
                x !== e.target && (x.checked = false)
            }
        }
        if(website && e.target.checked===true){
            this.setState({ redirect : "/websites/"+website})
            this.filters.website = { [website]: true }
        }
        else
            delete this.filters.website[website]
        
        category && (e.target.checked===true ? (this.filters.category[category] = e.target.checked) : delete this.filters.category[category]);
    
        let filters = { category: Object.keys(this.filters.category), website: Object.keys(this.filters.website)};
        this.loadVideosByProfile({condition: filters})
    }

    clearAll = (e)=>{
        this.setState({ videos: [] });
        const { filter } = e.target.dataset;
        filter === 'select-categories' ? this.filters.category={} : this.filters.website={};
        const listOfEle = document.getElementsByClassName(filter);
        for(let x of listOfEle){
            x.checked = false
        }
        let filters = { category: Object.keys(this.filters.category), website: Object.keys(this.filters.website)};
        this.loadVideosByProfile({condition: filters})
    }

    componentDidUpdate(){
        const { match: { params: { id=null }, path }  } = this.props;
        if(id && id!==this.currentURL){
            this.setState({ videos: [] });
            const { match: { params: { id=null }, path }  } = this.props;
            if(id && path.match('websites')){
                this.filters.website = { [id]: true }
            }
            //UPDATE CATEGOIES 
            this.props.fetchCategoriesByWebsites({ website: id }, (err, result)=>{
                this.setState({ categoriesByWebsites: result.categories });
                const listOfEle = document.getElementsByClassName("slected");
                for(let x of listOfEle){
                    x.checked = false
                }
            });
            this.filters.category = {};
            this.counter = 0;
            let filters = { category: Object.keys(this.filters.category), website: Object.keys(this.filters.website)};
            this.loadVideosByProfile({condition: filters});
            this.currentURL = id;
        }
        window.addEventListener('scroll', this.getScrollElement);
    }

    loadMoreItems = ()=>{
        this.counter = this.counter + this.defaultSkip;
        let filters = { category: Object.keys(this.filters.category), website: Object.keys(this.filters.website)};
        this.loadVideosByProfile({condition: filters})
    }

    getScrollElement = ()=>{
        function calculateOffset(el, scrollTop) {
            if (!el) { return 0; }
            return calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
        }
        function calculateTopPosition(el) {
            if (!el) { return 0; }
            return el.offsetTop + calculateTopPosition(el.offsetParent);
        }
        let el = this.scrollContainer.current;
        let scrollEl = window;
        let parentNode = el.parentNode;
        let offset = void 0;
        let doc = document.documentElement || document.body.parentNode || document.body;
        let scrollTop = scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : doc.scrollTop;
        offset = calculateOffset(el, scrollTop);
        if(offset<=2000){
            window.removeEventListener('scroll', this.getScrollElement);
            this.loadMoreItems();
        }
    }

    lineCap = (str)=>{
        if(str.length>18)
           str = str.slice(0, 18) + "...";
        return str;
    }

    render(){
      	return(
            <div className="layout-row flex">
                <div id="aside" className="page-sidenav no-shrink bg-white b-r nav-dropdown fade bg-light sticky" data-className="bg-light">
                <div className="sidenav h-100 modal-dialog bg-white b-r">
                    <div className="flex scrollable hover">
                        <div className="nav-border b-primary" data-nav="">
                                {/* <div className="nav-fold flex-column pt-2">
                                    <a className="d-flex p-2" data-toggle="dropdown" data-pjax-state=""> 
                                        <img src={profile.profile_picture} alt="..." className="w-96 mx-auto" />
                                    </a>
                                    <div className="hidden-folded w-100 p-2 pb-2 b-b">
                                        <div className="text-center">
                                            <a href="video.cat.html#" className="mr-auto text-nowrap text-color" data-pjax-state="">
                                             {profile.name}
                                            <small className="d-block text-sm text-muted">London, UK</small> 
                                            </a>
                                        </div>
                                        <div className="d-flex text-center pt-3">
                                            <div className="px-2 flex">
                                                <div className="font-weight-bold">{profile.total_videos_count}</div>
                                                <small className="text-muted">Videos</small>
                                            </div>
                                            <div className="px-2 flex">
                                                <div className="font-weight-bold">{profile.rating}</div>
                                                <small className="text-muted">Rating</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                */}
                            <ul className="nav bg">
                                <li className="nav-header d-flex nav-fold justify-content-between pt-2 pb-2">
                                    <span className="py-1 text-muted hidden-folded text-uppercase">Categories</span>
                                    <span className="py-1 text-muted hidden-folded text-uppercase pointer" data-filter="select-categories" onClick={this.clearAll}>clear all</span>
                                </li>
                                <li className="open">
                                    <ul className="nav nav-sub pre-scrollable-2 ml-4">
                                    {this.state.categoriesByWebsites.length>0
                                    ? [
                                        this.state.categoriesByWebsites && this.state.categoriesByWebsites.map((category)=>(
                                            <li className="d-flex justify-content-between align-items-center">
                                                <a className="w px-2 text-capitalize">
                                                   <label class="w ui-check ui-check-sm text-capitalize list-body mb-0"><input type="checkbox" className="select-categories"  data-category={category.name} onChange={this.filterVideos}/> <i class="dark-white rounded-0 mr-2"></i> {this.lineCap(category.name)}</label>
                                                </a>
                                                <span className="item-amount text-sm pr-3">{`${category.videos_count} | ${category.videos_downloaded || 0} - ${((category.videos_downloaded/category.videos_count)*100).toFixed(2)}`}</span>
                                                {/* <a href="video.detail.html?id=1" className="px-2 text-capitalize" data-pjax-state=""><span className="nav-text">{category}</span></a> */}
                                            </li>
                                        ))
                                      ]
                                    : [
                                        this.props.listOfDataByProfile && this.props.listOfDataByProfile.categories.map((category)=>(
                                            <li className="d-flex justify-content-between align-items-center">
                                                <a className="w px-2 text-capitalize">
                                                   <label class="w ui-check ui-check-sm text-capitalize list-body mb-0"><input type="checkbox" className="select-categories"  data-category={category.name} onChange={this.filterVideos}/> <i class="dark-white rounded-0 mr-2"></i> {this.lineCap(category.name)}</label>
                                                </a>
                                                <span className="item-amount text-sm pr-3">{`${category.videos_count} | ${category.videos_downloaded || 0} - ${((category.videos_downloaded/category.videos_count)*100).toFixed(2)}`}</span>
                                                {/* <a href="video.detail.html?id=1" className="px-2 text-capitalize" data-pjax-state=""><span className="nav-text">{category}</span></a> */}
                                            </li>
                                        ))
                                    ]
                                    }
                                    </ul>
                                </li>

                                <li className="nav-header d-flex nav-fold justify-content-between pt-2 pb-2">
                                    <span className="py-1 text-muted hidden-folded text-uppercase">Websites</span>
                                    <span className="py-1 text-muted hidden-folded text-uppercase pointer" data-filter="select-websites" onClick={this.clearAll}>clear all</span>
                                </li>
                                <li className="open">
                                    <ul className="nav nav-sub pre-scrollable-2 ml-4">
                                        {this.props.listOfDataByProfile && this.props.listOfDataByProfile.websites.map((website)=>(
                                            <li className={this.currentURL===website.name? `active d-flex justify-content-between align-items-center`: `d-flex justify-content-between align-items-center`}>
                                                {/* <label class="ui-check ui-check-md px-2 text-capitalize"><input type="radio" name="a" data-website={website} onChange={this.filterVideos}/> <i class="dark-white"></i>{website}</label> */}
                                                <Link to={"/websites/"+website.name} class="w px-2 text-capitalize">
                                                    {this.lineCap(website.name)}
                                                    {/* <input type="checkbox" className="select-websites" data-website={website.name} onChange={this.filterVideos}/> <i class="dark-white rounded-0 mr-2"></i>{this.lineCap(website.name)} */}
                                                </Link>
                                                <span className="item-amount text-sm pr-3">{`${website.videos_count} | ${website.videos_downloaded || 0} - ${((website.videos_downloaded/website.videos_count)*100).toFixed(2)}`}</span>
                                                {/* <a href="video.detail.html?id=1" className="px-2 text-capitalize" data-pjax-state=""><span className="nav-text">{website}</span></a> */}
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                {/* <li className="nav-header hidden-folded"><span className="text-muted">Discover</span></li>
                                <li>
                                    <a href="video.html" data-pjax-state="">
                                        <span className="nav-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="feather feather-youtube"
                                            >
                                                <path
                                                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                                                ></path>
                                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                            </svg>
                                        </span>
                                        <span className="nav-text">Browse</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex" ref={this.scrollContainer}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Videos OnVideosList={this.state.videos}/>
                    </Suspense>
                </div>
            </div>
      	 )
      }
}

export default connect(state=>state, actions)(Sidebar);
