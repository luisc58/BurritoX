import FirebaseTools, { firebaseDb } from '../utils/firebase';
import { REFUSED } from 'dns';

const SET_ITEMS = 'SET_ITEMS';
export const createItem = (item) => async (dispatch) => {
	let ref = firebaseDb.ref(`items`);
	const key = ref.push().key;
	ref.child(key).update({ id: key, ...item }).then((data) => {
		ref.on('value', (snap) => {
			dispatch({
				type: SET_ITEMS,
				payload: { ...snap.val() }
			});
		});
	});
};

export const getAllItems = () => async (dispatch) => {
	let ref = firebaseDb.ref(`items`);
	ref.on('value', (snap) => {
		dispatch({
			type: SET_ITEMS,
			payload: { ...snap.val() }
		});
	});
};

export const getItem = (key, type) => async (dispatch) => {
	let ref = firebaseDb.ref(`items/${key}`);
	ref.on('value', (snap) => {
		dispatch({
			type: 'SHOW_MODAL',
			payload: { type, data: { ...snap.val() } }
		});
	});
};

export const deleteItem = (key) => (dispatch) => {
	firebaseDb.ref(`items/${key}`).remove((err) => {
		if (err != null) {
			console.log(err);
		}
	});
};
