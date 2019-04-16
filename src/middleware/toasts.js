import { SHOW_TOAST } from '../constants/actionTypes';
import { toast } from 'react-toastify';

const reactToastifyDefaultOptions = {
	autoClose: 1000,
	closeButton: false,
	type: toast.TYPE.SUCCESS,
	hideProgressBar: false,
	position: toast.POSITION.TOP_LEFT
};

const toastMiddleware = () => (next) => (action) => {
	next(action);
	if (action.type !== SHOW_TOAST) return;
	console.log(message, type);
	const { message, type } = action.payload;
	toast(message, { ...reactToastifyDefaultOptions, type });
};

export default toastMiddleware;