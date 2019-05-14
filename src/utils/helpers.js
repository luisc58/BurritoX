import { toast } from 'react-toastify';
import { listenerCount } from 'events';

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
