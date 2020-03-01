import Normalizr from 'beep/app/utils/NormalizrById';
import ApiService from 'beep/app/services/ApiService';
import { getBeepsPaginationData, getIsLoadingBeep, getBeepsEndReached } from 'beep/app/reducers';

// Declare action names as constants with uppercase string
export const ADD_BEEPS = 'ADD_BEEPS';
export const CLEAR_BEEPS = 'CLEAR_BEEPS';
export const BEGIN_BEEP = 'BEGIN_BEEP';
export const ERROR_BEEP = 'ERROR_BEEP';
export const INCREMENT_BEEPS_PAGE = 'INCREMENT_BEEPS_PAGE';
export const RESET_BEEPS_PAGINATION = 'RESET_BEEPS_PAGINATION';
export const RESET_BEEPS = 'RESET_BEEPS';
export const RESET_END_REACHED = 'RESET_END_REACHED';


// Thunk: this is a special type of action that can dispatch other actions
export function fetchBeeps() {
	return async (dispatch, getState) => {
		if(getIsLoadingBeep(getState()) || getBeepsEndReached(getState())) return;
		dispatch(beginBeep);
		let paginationData = getBeepsPaginationData(getState());
		await ApiService.getBeeps(paginationData)
			.then( result => {
					let normalizd = Normalizr(result.beeps, '_id');
						dispatch(addBeeps(normalizd));
						dispatch(incrementPage());
						return result;
				}
			)
			.catch(error => {
					dispatch(errorBeep);
					throw ({error: error, message: 'Unable to get beeps'});
				}
			);
		};
	}
		
export function addBeep(user){
	return async dispatch => {
		await ApiService.postBeep(user)
			.then(
				result => {
					dispatch(resetEndReched());
					dispatch(reloadBeeps());
					return result;
				},
				error => {
					throw({error: error, message: 'Unable to generate beep'})
				}
			)
	};
}

export function reloadBeeps(){
	return async (dispatch, getState) => {
		dispatch(resetPagination());
		dispatch(beginBeep());
		let paginationData = getBeepsPaginationData(getState());
		await ApiService.getBeeps(paginationData)
			.then(
				result => {
					let normalizd = Normalizr(result.beeps, '_id');
					dispatch(resetBeeps());
					dispatch(addBeeps(normalizd));
					dispatch(incrementPage());
					return result;
				},
				error => {
					dispatch(errorBeep);
					throw ({error: error, message: 'Unable to get beeps'});
				}
			);
	};
}

export function logout() {
	return async dispatch => {
		dispatch(resetBeeps());
	}
};

export const resetPagination = () => ({
	type: RESET_BEEPS_PAGINATION
});

export const resetBeeps = () => ({
	type: RESET_BEEPS
});

export const resetEndReched = () => ({
	type: RESET_END_REACHED
});

export const incrementPage = () => ({
	type: INCREMENT_BEEPS_PAGE
});

export const beginBeep = data => ({
	type: BEGIN_BEEP
});

export const addBeeps = data => ({
	type: ADD_BEEPS,
	payload: { data }
});

export const errorBeep = () => ({
	type: ERROR_BEEP
});

export const clearBeeps = () => ({
	type: CLEAR_BEEPS
});