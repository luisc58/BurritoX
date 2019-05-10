import { createAction } from 'redux-actions';
import FirebaseTools, { firebaseDb } from '../utils/firebase';

import {
	LOGIN_WITH_PROVIDER_FIREBASE,
	FETCH_FIREBASE_USER,
	UPDATE_FIREBASE_USER,
	CHANGE_FIREBASE_USER_PASSWORD,
	FIREBASE_PASSWORD_RESET_EMAIL,
	LOGOUT_FIREBASE_USER
} from './types';

export const loginWithProvider = createAction(LOGIN_WITH_PROVIDER_FIREBASE);

export const registerUser = (user) => async (dispatch) => {
	return FirebaseTools.registerUser(user);
};
export const loginUser = (user) => async (dispatch) => {
	return FirebaseTools.loginUser(user);
};

export const setAuthInfo = (user) => {
	return FirebaseTools.setAuthInfo(user);
};

export const fetchInfo = (uid) => async (dispatch) => {
	firebaseDb.ref(`users/${uid}`).on('value', (snap) => {
		dispatch({
			type: 'SET_USER',
			payload: { uid, ...snap.val() }
		});
	});
};

export const updateProfileInfo = (uid, username, email) => async (dispatch) => {
	firebaseDb
		.ref(`users/${uid}`)
		.update({
			username,
			email
		})
		.then(() => {
			firebaseDb.ref(`users/${uid}`).on('value', (snap) => {
				dispatch({
					type: 'SET_USER',
					payload: { uid, ...snap.val() }
				});
			});
		});
};

export const updateAccountInfo = (uid, path, data) => async (dispatch) => {
	firebaseDb.ref(`users/${uid}/${path}`).set({ ...data }).then(() => {
		firebaseDb.ref(`users/${uid}`).on('value', (snap) => {
			dispatch({
				type: 'SET_USER',
				payload: { uid, ...snap.val() }
			});
		});
	});
};

export const resetPassword = (newpassword) => async (dispatch) => {
	return FirebaseTools.changePassword(newpassword);
};

export const fetchUser = createAction(FETCH_FIREBASE_USER);
export const updateUser = createAction(UPDATE_FIREBASE_USER);
export const changePassword = createAction(CHANGE_FIREBASE_USER_PASSWORD);
export const resetPasswordEmail = createAction(FIREBASE_PASSWORD_RESET_EMAIL);
export const logoutUser = createAction(LOGOUT_FIREBASE_USER);
