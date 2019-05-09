import { handleActions } from 'redux-actions';
import FirebaseTools from '../utils/firebase';
import {
	LOGIN_WITH_PROVIDER_FIREBASE,
	REGISTER_FIREBASE_USER,
	LOGIN_FIREBASE_USER,
	FETCH_FIREBASE_USER,
	UPDATE_FIREBASE_USER,
	CHANGE_FIREBASE_USER_PASSWORD,
	FIREBASE_PASSWORD_RESET_EMAIL,
	LOGOUT_FIREBASE_USER
} from '../actions/types';

export default handleActions(
	{
		[FETCH_FIREBASE_USER]: () => fetchUser(),
		['FETCH_USER_INFO']: (state, action) => {
			return {
				test: action.payload
			};
		},
		[LOGOUT_FIREBASE_USER]: (state, action) => {
			return logoutUser(action.payload);
		}
	},
	{}
);

function fetchUser() {
	FirebaseTools.fetchUser();
}

function logoutUser(user) {
	FirebaseTools.logoutUser(user);
}
