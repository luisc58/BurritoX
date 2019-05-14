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

export function taboo(title, desc) {
	var regx = new RegExp(`Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday`, 'gi');
	var newTitle = title.replace(regx, '****');
	var newDesc = desc.replace(regx, '****');
	return { newTitle, newDesc };
}

// compute sale tax
export function calculateTax(purchaseAmount, state) {
	let taxRate,
		tax;

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

// format timestamp
export function formatDate(timestamp) {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
	let date = new Date(timestamp);
	let month = months[date.getMonth()],
		day = date.getDate(),
		year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
