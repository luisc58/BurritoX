import axios from 'axios';
import { API } from '../constants/actionTypes';
import { apiEnd, apiStart } from '../actions/apiActions';
//AXIOS DEFAULT CONFIG
// axios.defaults.baseURL = 'https://api.myjson.com/bins/';
axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${'fakeAccessToken'}`;

const api = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type !== API) return;

	const { url, method, data, onSuccess, onFailure, label } = action.payload;
	const dataOrParams = [ 'GET', 'DELETE' ].includes(method) ? 'params' : 'data';

	// ===== API REQUEST HAS STARTED
	if (label) {
		dispatch(apiStart(label));
	}

	axios
		.request({ url, method, [dataOrParams]: data })
		.then(({ data }) => {
			dispatch(onSuccess(data));
		})
		.catch((error) => {
			dispatch(onFailure(error));
		})
		.finally(() => {
			// api request has ended
			if (label) {
				dispatch(apiEnd(label));
			}
		});
};

export default api;
