import { toast } from 'react-toastify';
import taxRates from './taxRates.json';

const reactToastifyDefaultOptions = {
	autoClose: 2000,
	closeButton: false,
	type: toast.TYPE.SUCCESS,
	hideProgressBar: false,
	position: toast.POSITION.TOP_RIGHT
};

export function showToast(message, options) {
	toast(message, { ...reactToastifyDefaultOptions, ...options });
}

export function taboo(title, desc, list) {
	var exp = '';
	for (var i = 0; i < list.length - 1; i++) {
		exp = exp.concat(list[i], '|');
	}

	exp = exp.concat(list[list.length - 1]);

	var regx = new RegExp(exp, 'gi');
	var newTitle = title.replace(regx, '****');
	var newDesc = desc.replace(regx, '****');
	return { newTitle, newDesc };
}

//
export function calculateTax(purchaseAmount, state) {
	let taxRate, tax;

	if (taxRates[state]) {
		taxRate = taxRates[state].taxRate;
		tax = purchaseAmount * (taxRate / 100);
	} else {
		tax = null;
	}

	return tax;
}

// get object containing all US states
export function getAllStates() {
	let states = {};

	for (let state in taxRates) {
		states[taxRates[state].abbreviation] = state;
	}

	return states;
}
