import { handleActions } from 'redux-actions';
import { SET_PRICING, CLEAR_PRICING, SELECT_OPTION } from '../constants/actionTypes';

export default handleActions(
	{
		[SET_PRICING]: (state, action) => {
			return {
				...state,
				isSellActive: false
			};
		},
		[CLEAR_PRICING]: (state, action) => {
			return {
				...state,
				isSellActive: true
			};
		},
		[SELECT_OPTION]: (state, action) => {
			return {
				...state,
				selectedOption: action.payload
			};
		}
	},
	{
		isSellActive: false,
		selectedOption: 1
	}
);
