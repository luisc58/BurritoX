import { handleActions } from 'redux-actions';
import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_ITEM } from '../constants/actionTypes';
import produce from 'immer';

export default handleActions(
	{
		[SHOW_MODAL]: (state, action) => {
			let data = action.payload.data ? action.payload.data : {};
			return {
				...state,
				modal: {
					type: action.payload.type,
					data
				}
			};
		},
		[HIDE_MODAL]: (state, action) => {
			return {
				...state,
				modal: {
					type: null,
					data: {}
				}
			};
		},
		[SET_MODAL_ITEM]: produce((state, action) => {
			state.modal.data['item_info'] = action.payload;
		})
	},
	{
		modal: {
			type: null,
			data: {}
		}
	}
);
