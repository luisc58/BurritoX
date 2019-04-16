import { handleActions } from 'redux-actions';
import { SET_SEARCH_RESULTS, SET_CATEGORY } from '../constants/actionTypes';

export default handleActions(
	{
		[SET_SEARCH_RESULTS]: (state, action) => {
			return {
				...state,
				setSearchItems: action.payload
			};
		},
		[SET_CATEGORY]: (state, action) => {
			return {
				...state,
				product_category: action.payload
			};
		}
	},
	{}
);
