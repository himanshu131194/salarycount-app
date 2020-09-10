import {LOAD_PROFILES, VIDEOS_BY_PROFILE, PROFILE_DATA} from '../actions/types'

export const listOfProfilesReducer = (state=null, action)=>{
	switch(action.type){
		  case LOAD_PROFILES:
			return action.payload;
		  default: 
		   return state;
	}
} 


export const listOfVideosByProfileReducer = (state=null, action)=>{
	switch(action.type){
		  case VIDEOS_BY_PROFILE:
			return action.payload;
		  default: 
		   return state;
	}
} 

export const listOfDataByProfileReducer = (state=null, action)=>{
	switch(action.type){
		  case PROFILE_DATA:
			return action.payload;
		  default: 
		   return state;
	}
} 
