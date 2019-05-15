import { handleActions } from 'redux-actions';
import { SET_USER, SET_USER_PAGE, SET_SUPER_VIEW } from '../constants/actionTypes';
// importing handleActions to handle multiple action types

export default handleActions(
	{
		[SET_USER]: (state, action) => {
			window.location.href = '/';
			return action.payload;
		},
		['UPDATE_SHIPPING']: (state, action) => {
			return {
				...state,
				shippingInfo: action.payload
			};
		},
		['REFRESH_SELLING']: (state, action) => {
			return {
				...state,
				transactions: {
					selling: action.payload
				}
			};
		},
		[SET_USER_PAGE]: (state, action) => {
			return {
				...state,
				currentPage: action.payload
			};
		},
		[SET_SUPER_VIEW]: (state, action) => {
			return {
				...state,
				currentView: action.payload
			};
		}
	},
	{}
);
