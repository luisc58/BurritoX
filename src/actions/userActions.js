import { SET_USER, SET_USER_PAGE, SET_PRICING, CLEAR_PRICING, SELECT_OPTION } from '../constants/actionTypes';
import { createAction } from 'redux-actions';
/////
export const setUser = (user) => ({
	type: SET_USER,
	payload: { ...user }
});

//////
export const setUserPage = (page) => ({
	type: SET_USER_PAGE,
	payload: page
});

/// SELL FORM ACTIONS /////////
export const setPricing = createAction(SET_PRICING);
export const clearPricing = createAction(CLEAR_PRICING);
export const selectOption = createAction(SELECT_OPTION);
