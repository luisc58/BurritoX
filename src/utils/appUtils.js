const noOP = (message) => ({ type: 'NO_OP' }); // a paylaod creator

export const apiPayloadCreator = ({
	url = '/',
	method = 'GET',
	onSuccess = noOP,
	onFailure = noOP,
	label = '',
	data = ''
}) => ({
	url,
	method,
	onSuccess,
	onFailure,
	data,
	label
});
