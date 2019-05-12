import { handleActions } from 'redux-actions';
import { SET_FRIENDS } from '../constants/actionTypes';

export default handleActions(
	{
		[SET_FRIENDS]: (state, action) => {
			return action.payload;
		}
	},
	{}
);
