import { combineReducers } from 'redux'
import Beeps, * as fromBeeps from 'beep/app/reducers/BeepsReducer';

const rootReducer = combineReducers({
	Beeps,
});

export default rootReducer;

//Beeps
export const getBeeps = state => 
	fromBeeps.getBeeps(state.Beeps);

export const getIsLoadingBeep = state =>
	fromBeeps.getIsLoadingBeep(state.Beeps);

export const getBeepsPaginationData = state => 
	fromBeeps.getBeepsPaginationData(state.Beeps);

export const getBeepsEndReached = state => 
	fromBeeps.getBeepsEndReached(state.Beeps);