import { toast } from 'react-toastify';

// function isUserSignedIn(user = {}, method) {
// 	if (!user.type) window.location = '/login';
// 	method(...args);
// }
///// React-Toastify /////////////
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
