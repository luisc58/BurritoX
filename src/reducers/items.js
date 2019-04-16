import { handleActions } from 'redux-actions';
import { SET_ITEMS } from '../constants/actionTypes';
import { toast } from 'react-toastify';

export default handleActions(
	{
		[SET_ITEMS]: (state, action) => {
			return action.payload;
		}
	},
	{}
);
