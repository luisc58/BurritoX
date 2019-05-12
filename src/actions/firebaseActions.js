import FirebaseTools, { firebaseDb, firebaseAuth } from '../utils/firebase';

export const registerUser = (user) => async (dispatch) => {
	return FirebaseTools.registerUser(user);
};
export const loginUser = (user) => async (dispatch) => {
	firebaseAuth
		.signInWithEmailAndPassword(user.email, user.password)
		.then((userInfo) => {
			firebaseDb.ref(`users/${userInfo.user.uid}`).on('value', (snap) => {
				if (snap.val().verified === true) {
					dispatch({
						type: 'SET_USER',
						payload: { ...snap.val() }
					});
				} else {
					dispatch({
						type: 'SHOW_TOAST',
						payload: { message: 'User has not been approved!', type: 'error' }
					});
				}
			});
		})
		.catch((error) => {
			dispatch({
				type: 'SHOW_TOAST',
				payload: { message: error.message, type: 'error' }
			});
		});
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

export const approveUser = (uid) => async (dispatch) => {
	let ref = firebaseDb.ref(`users/${uid}`);
	ref.update({ verified: true }).then(() => {
		dispatch({
			type: 'SHOW_TOAST',
			payload: { type: 'success', message: 'User approved' }
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

export const fetchUsers = (currentUserId) => async (dispatch) => {
	firebaseDb.ref(`users`).on('value', (snap) => {
		if (currentUserId !== snap.key) {
			dispatch({
				type: 'FETCH_USERS',
				payload: { ...snap.val() }
			});
		}
	});
};
