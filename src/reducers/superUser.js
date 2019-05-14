import { handleActions } from 'redux-actions';
import { FETCH_USERS, FETCH_TABOO } from '../constants/actionTypes';

export default handleActions(
	{
		[FETCH_USERS]: (state, action) => {
			return {
				...state,
				users: action.payload
			};
		},
		[FETCH_TABOO]: (state, action) => {
			return {
				...state,
				tabooList: action.payload
			};
		}
	},
	{
		users: {},
		tabooList: {}
	}
);
