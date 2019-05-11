import { toast } from 'react-toastify';

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
	var newTitle = title.replace(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/gi, '****');
	var newDesc = desc.replace(/Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday/gi, '****');
	return { newTitle, newDesc };
}
