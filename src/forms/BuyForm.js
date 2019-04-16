import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SimpleFormInput } from '../utils/formInputs';
import { StyledFormButton } from '../styled/Form';

////////////////////////////////////////////////////////
class BuyForm extends React.Component {
	render() {
		const { handleSubmit, selectOption, selectedOption } = this.props;
		return (
			<form onSubmit={handleSubmit} className="form">
				<Field name="price" type="text" label="Price" component={SimpleFormInput} />
				<StyledFormButton type="submit">Buy</StyledFormButton>
			</form>
		);
	}
}

export default reduxForm({
	form: 'buy'
})(BuyForm);
