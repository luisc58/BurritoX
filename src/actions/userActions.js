import {
	SET_USER,
	SET_USER_PAGE,
	SET_PRICING,
	CLEAR_PRICING,
	SELECT_OPTION,
	SET_SUPER_VIEW
} from '../constants/actionTypes';
import { createAction } from 'redux-actions';
/////
export const setUser = (user) => ({
	type: SET_USER,
	payload: { ...user }
});

export const setUserPage = (page) => ({
	type: SET_USER_PAGE,
	payload: page
});

export const setSuperView = (view) => ({
	type: SET_SUPER_VIEW,
	payload: view
});

/// SELL FORM ACTIONS /////////
export const setPricing = createAction(SET_PRICING);
export const clearPricing = createAction(CLEAR_PRICING);
export const selectOption = createAction(SELECT_OPTION);
