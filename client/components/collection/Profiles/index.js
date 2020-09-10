
import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import Profiles from './List';

class Sidebar extends Component{
    state = {
        profiles: []
    };
    scrollContainer = React.createRef();
    defaultLimit = 36;
    defaultSkip = 36;
    counter = 0;
    filters = {
        
    };

    componentDidMount(){
        // window.addEventListener('scroll', this.getScrollElement);
        this.props.dataByProfile({ model: this.profileId }, ()=>{
            console.log(this.props);
        });
        this.loadProfiles();
    }

    loadProfiles = ()=>{
        this.props.listProfiles({
            limit: this.defaultLimit,
            offset : this.counter,
            filters: this.filters
        }, (err, result)=>{
            this.setState((preState)=>({
                profiles : [...preState.profiles, ...result.data]
            }));
        });
    }

    filterProfiles = async (e)=>{
        this.counter = 0;
        const { dataset:{ gender, sort}, className } = e.target;
        const listOfEle = document.getElementsByClassName(className);
        if(className==='select-gender'){
            for(let x of listOfEle){
                x !== e.target && (x.checked = false)
            }
        }
        if(gender && e.target.checked){
            this.filters.condition = { gender: +gender }
        }else{
            delete this.filters.condition;
        }
        await this.setState((preState)=>({
            profiles : []
        }));
        this.loadProfiles();
        // this.counter = 0;
        // this.setState({ videos: [] })
        // const { website, category } = e.target.dataset;
        // const className = e.target.className;
        
        // const listOfEle = document.getElementsByClassName(className);
        // if(className==='select-websites'){
        //     for(let x of listOfEle){
        //         x !== e.target && (x.checked = false)
        //     }
        // }
        // if(website && e.target.checked===true)
        //     this.filters.website = { [website]: true }
        // category && (e.target.checked===true ? (this.filters.category[category] = e.target.checked) : delete this.filters.category[category]);
    
        // let filters = { category: Object.keys(this.filters.category), website: Object.keys(this.filters.website)};
        // this.loadVideosByProfile({condition: { model: this.profileId, ...filters }})
    }

    clearAll = (e)=>{
        this.counter = 0;
        this.setState({ profiles: [] })
        const { filter } = e.target.dataset;
        const listOfEle = document.getElementsByClassName(filter);
        for(let x of listOfEle){
            x.checked = false
        }
        filter=="select-gender"? (delete this.filters.condition): (delete this.filters.sort);
        this.loadProfiles();
    }

    componentDidUpdate(){
        window.addEventListener('scroll', this.getScrollElement);
    }

    loadMoreItems = ()=>{
        this.counter = this.counter + this.defaultSkip;
        this.loadProfiles();
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
        if(offset<=1000){
            window.removeEventListener('scroll', this.getScrollElement);
            this.loadMoreItems();
        }
    }

    render(){
      	return(
            <div className="layout-row flex">
                <div id="aside" className="page-sidenav no-shrink bg-white b-r nav-dropdown fade bg-light sticky" data-className="bg-light">
                <div className="sidenav h-100 modal-dialog bg-white b-r">
                    <div className="flex scrollable hover">
                        <div className="nav-border b-primary" data-nav="">
                            <ul className="nav bg">
                                <li className="nav-header d-flex nav-fold justify-content-between pt-2 pb-2">
                                    <span className="py-1 text-muted hidden-folded text-uppercase">gender</span>
                                    <span className="py-1 text-muted hidden-folded text-uppercase pointer" data-filter="select-gender" onClick={this.clearAll}>clear all</span>
                                </li>
                                <li className="open">
                                    <ul className="nav nav-sub pre-scrollable-2 ml-4">
                                        <li>
                                            <label class="ui-check ui-check-md px-2 text-capitalize"><input type="checkbox" className="select-gender"  data-gender="1" onChange={this.filterProfiles}/> <i class="dark-white rounded-0 mr-2"></i>male</label>
                                        </li>                                      
                                        <li>
                                            <label class="ui-check ui-check-md px-2 text-capitalize"><input type="checkbox" className="select-gender"  data-gender="2" onChange={this.filterProfiles}/> <i class="dark-white rounded-0 mr-2"></i>female</label>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-header d-flex nav-fold justify-content-between pt-2 pb-2">
                                    <span className="py-1 text-muted hidden-folded text-uppercase">sort by</span>
                                    <span className="py-1 text-muted hidden-folded text-uppercase pointer" data-filter="select-categories" onClick={this.clearAll}>clear all</span>
                                </li>
                                <li className="open">
                                    <ul className="nav nav-sub pre-scrollable-2 ml-4">
                                        <li>
                                            <label class="ui-check ui-check-md px-2 text-capitalize"><input type="checkbox" className="select-categories"  data-sort="1" onChange={this.filterProfiles}/> <i class="dark-white rounded-0 mr-2"></i>videos</label>
                                        </li>                                      
                                        <li>
                                            <label class="ui-check ui-check-md px-2 text-capitalize"><input type="checkbox" className="select-categories"  data-sort="2" onChange={this.filterProfiles}/> <i class="dark-white rounded-0 mr-2"></i>rating</label>
                                        </li>                                      
                                        <li>
                                            <label class="ui-check ui-check-md px-2 text-capitalize"><input type="checkbox" className="select-categories"  data-sort="1" onChange={this.filterProfiles}/> <i class="dark-white rounded-0 mr-2"></i>boob size</label>
                                        </li>                                      
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex" ref={this.scrollContainer}>
                    <Profiles OnProfilesList={this.state.profiles}/>
                </div>
            </div>
      	 )
      }
}

export default connect(state=>state, actions)(Sidebar);


