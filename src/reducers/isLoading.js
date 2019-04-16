import { handleActions } from 'redux-actions';
import produce from 'immer';
import { GET_ITEMS } from '../constants/labels';
import { API_START, API_END } from '../constants/actionTypes';

export default handleActions(
	{
		[API_START]: produce((state, action) => {
			if (action.paylaod === GET_ITEMS) {
				state[GET_ITEMS] = true;
			}
		}),
		[API_END]: produce((state, action) => {
			if (action.payload === GET_ITEMS) {
				state[GET_ITEMS] = false;
			}
		})
	},
	{}
);
