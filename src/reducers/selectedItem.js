import { handleActions } from 'redux-actions';
import { SELECT_ITEM } from '../constants/actionTypes';

export default handleActions(
	{
		[SELECT_ITEM]: (state, action) => action.payload
	},
	{}
);
