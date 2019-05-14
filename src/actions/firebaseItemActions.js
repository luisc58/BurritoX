import FirebaseTools, { firebaseDb } from '../utils/firebase';

const SET_ITEMS = 'SET_ITEMS';

export const createItem = (item, uid) => async (dispatch) => {
	let ref = firebaseDb.ref(`items`);
	let transactionRef = firebaseDb.ref(`users/${uid}/transactions/selling`);
	const transactionKey = transactionRef.push().key;
	const key = ref.push().key;
	ref
		.child(key)
		.update({
			id: key,
			...item,
			asks: { [transactionKey]: { price: item.price, id: transactionKey, seller: uid } }
		})
		.then(() => {
			ref.on('value', (snap) => {
				dispatch({
					type: SET_ITEMS,
					payload: { ...snap.val() }
				});
			});
		})
		.then(() => {
			transactionRef.child(transactionKey).set({ item: key });
			transactionRef.on('value', (snap) => {
				dispatch({
					type: 'REFRESH_SELLING',
					payload: { ...snap.val() }
				});
			});
		});
};

export const trackSellingTransaction = (itemId) => async (dispatch) => {};

export const approveItem = (uid) => async (dispatch) => {
	let ref = firebaseDb.ref(`items/${uid}`);
	ref.update({ verified: true }).then(() => {
		dispatch({
			type: 'SHOW_TOAST',
			payload: { type: 'success', message: 'Item updated' }
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
		} else {
			dispatch({
				type: 'SHOW_TOAST',
				payload: { type: 'error', message: 'Item deleted' }
			});
		}
	});
};
