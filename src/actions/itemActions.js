import { createAction } from 'redux-actions';
import { normalize, schema } from 'normalizr';
import { apiPayloadCreator } from '../utils/appUtils';
import { showToast } from '../utils/helpers';
import { API, GET_ITEMS, SET_ITEMS, SELECT_ITEM, SET_SEARCH_RESULTS, SET_CATEGORY } from '../constants/actionTypes';
//CREATES ACTION CREATOR -- HARD CODED LOGIC
const getItemsAC = createAction(API, apiPayloadCreator);
const getItemAC = createAction(API, apiPayloadCreator);
const getItemAsksAC = createAction(API, apiPayloadCreator);
const getItemBidsAC = createAction(API, apiPayloadCreator);
const postItemAC = createAction(API, apiPayloadCreator);
const updateItemAC = createAction(API, apiPayloadCreator);
const deleteItemAC = createAction(API, apiPayloadCreator);

export const getItems = () =>
	getItemsAC({
		url: '/home',
		onSuccess: setItems,
		label: GET_ITEMS
	});
export const getItem = (id) => {
	return getItemAC({
		url: `/super/item/${id}`,
		onSuccess: setItem
	});
};

export const getItemAsks = (id) => {
	return getItemAsksAC({
		url: `/super/itemAsks/${id}`,
		onSuccess: setItem
	});
};

export const getItemBids = (id) => {
	return getItemBidsAC({
		url: `/super/itemBids/${id}`,
		onSuccess: setItem
	});
};

export const postItem = (data) => {
	window.location.href = '/';
	return postItemAC({
		url: '/super/createItem',
		method: 'POST',
		data
	});
};

export const updateItem = (data, id) => {
	window.location.href = '/';
	return updateItemAC({
		url: `/super/updateItem/${id}`,
		method: 'PUT',
		data
	});
};

export const deleteItem = (id) => {
	return deleteItemAC({
		url: `/super/deleteItem/${id}`,
		method: 'DELETE'
	});
};

// SUPER USER GET ALL ITEMS
export const getAllItems = () =>
	getItemsAC({
		url: 'super/allItems',
		onSuccess: setItems,
		label: GET_ITEMS
	});

function setItems(items) {
	const itemSchema = new schema.Entity('items');
	const itemListSchema = new schema.Array(itemSchema);
	const normalizedData = normalize(items, itemListSchema);

	return {
		type: SET_ITEMS,
		payload: normalizedData.entities.items
	};
}

function setItem(item) {
	return {
		type: 'SET_MODAL_ITEM',
		payload: item
	};
}

function test(data) {
	console.log(data);
}

export const selectItem = createAction(SELECT_ITEM);
// SEARCH ACTIONS ----
export const setSearchResults = createAction(SET_SEARCH_RESULTS);
export const setCategory = createAction(SET_CATEGORY);
