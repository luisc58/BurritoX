import { handleActions } from 'redux-actions';
import { FETCH_USERS } from '../constants/actionTypes';

export default handleActions(
	{
		[FETCH_USERS]: (state, action) => {
			return {
				users: action.payload
			};
		}
	},
	{
		users: {}
	}
);
