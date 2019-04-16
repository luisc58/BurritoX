import { createAction } from 'redux-actions';
import { SHOW_MODAL, HIDE_MODAL } from '../constants/actionTypes';

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
