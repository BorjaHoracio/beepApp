// // Action names should be imported from their respective action modules
import {
	ADD_BEEPS,
	CLEAR_BEEPS,
	BEGIN_BEEP,
	ERROR_BEEP,
	INCREMENT_BEEPS_PAGE,
	RESET_BEEPS_PAGINATION,
	RESET_BEEPS,
	RESET_END_REACHED
} from 'beep/app/actions/BeepActions';

const PAGE_SIZE = 10;

const initialState = { 
	byId: {},
	allIds: [],
	isLoading: false,
	offset: 0,
	limit: PAGE_SIZE,
	endReached: false
};

// Return a new state object with updated attributes
export default function BeepsReducer (state = initialState, action) {
	switch (action.type) {
		case ERROR_BEEP:
		case BEGIN_BEEP: {
			return {
				...state,
				isLoading: true
			}
		}
		case ADD_BEEPS: {
			let allIds = [...new Set(state.allIds.concat(action.payload.data.allIds))];
			let byId = {
				...state.byId,
				...action.payload.data.byId
			};
			return {
				...state,
				allIds,
				byId,
				isLoading: false,
				endReached: action.payload.data.allIds < PAGE_SIZE
			};
		}
		case CLEAR_BEEPS: {
			return {
				...state,
				byId: {},
				allIds: [],
				isLoading: false
			}
		}
		case INCREMENT_BEEPS_PAGE: {
			return {
				...state,
				offset: state.offset + PAGE_SIZE,
			}
		}
		case RESET_BEEPS_PAGINATION: {
			return {
				...state,
				offset: initialState.offset,
				limit: initialState.limit
			}
		}

		case RESET_BEEPS: {
			return {
				...initialState,
				byId: {},
				allIds: [],
				isLoading: false,
				offset: 0,
				limit: PAGE_SIZE,
				endReached: false
			}
		}

		case RESET_END_REACHED: {
			return {
				...state,
				endReached: false
			}
		}

		default:
			return state;
	}
};

export const getBeeps = state => {
	let data = state.allIds.map((id) => state.byId[id]);
	return data.sort((a, b) => a.date - b.date);
}

export const getIsLoadingBeep = state => {
	return state.isLoading;
}

export const getBeepsPaginationData = state => {
	return { offset: state.offset, limit: state.limit };
}

export const getBeepsEndReached = state => {
	return state.endReached;
}
