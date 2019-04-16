import { handleActions } from 'redux-actions';
import { SET_USER, SET_USER_PAGE } from '../constants/actionTypes';
// importing handleActions to handle multiple action types

export default handleActions(
	{
		[SET_USER]: (state, action) => action.payload,
		[SET_USER_PAGE]: (state, action) => {
			return {
				...state,
				currentPage: action.payload
			};
		}
	},
	{}
);
