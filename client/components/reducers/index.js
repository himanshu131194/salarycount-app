import {combineReducers} from 'redux'
import {listOfProfilesReducer, listOfVideosByProfileReducer, listOfDataByProfileReducer} from './reducers'

export default combineReducers({
	  listOfProfiles :  listOfProfilesReducer,
	  listOfVideosByProfile: listOfVideosByProfileReducer,
	  listOfDataByProfile: listOfDataByProfileReducer
})
