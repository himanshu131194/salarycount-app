import {PROFILE_LIST, VIDEOS_BY_PROFILE, PROFILE_DATA} from './types'
import CONFIG from '../../../config'
import axios from 'axios'


export const listProfiles = ({limit, offset, filters}, cb)=>{
    return async (dispatch)=>{
           let err = null, result = []
           try{
               let {data} = await axios.post(`${CONFIG.API_URL}/api/list-profiles`, {limit, offset, filters});
               result = data
           }catch(e){
               console.log(e)
               err = e.response.data.error;
           }
           dispatch({
               type: PROFILE_LIST,
               payload: result
           })
           cb(null, result);
    }
}

export const videosByProfile = ({limit, offset, filters}, cb)=>{
    return async (dispatch)=>{
           let err = null, result = [];
           try{
                let {data} = await axios.get(`${CONFIG.API_URL}/api/videos-by-profile`, {
                    params : {
                       limit, offset, filters
                    }
                });
                result = data.data
           }catch(e){
               err = e
           }
           dispatch({
               type: VIDEOS_BY_PROFILE,
               payload: result
           })
           cb(null, result);
    }
}

export const dataByProfile = ({model}, cb)=>{
    return async (dispatch)=>{
           let err = null, result = [];
           try{
                let {data} = await axios.get(`${CONFIG.API_URL}/api/profile-data`, {
                    params : {
                       model
                    }
                });
                result = data.data
           }catch(e){
               err = e
           }
           dispatch({
               type: PROFILE_DATA,
               payload: result
           })
           cb(null, result);
    }
}



export const fetchCategoriesByWebsites = ({website}, cb)=>{
    return async (dispatch)=>{
           let err = null, result = [];
           try{
                let {data} = await axios.get(`${CONFIG.API_URL}/api/categories-by-websites`, {
                    params : {
                       website
                    }
                });
                result = data.data
                cb(null, result);
           }catch(e){
               err = e
               return cb(err, null);
           }
    }
}


