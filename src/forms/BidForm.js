import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SimpleFormInput } from '../utils/formInputs';
import { StyledFormButton } from '../styled/Form';

////////////////////////////////////////////////////////
class BidForm extends React.Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit} className="form">
				<Field name="bid" type="text" label="Bid" component={SimpleFormInput} />
				<StyledFormButton type="submit">Place Bid</StyledFormButton>
			</form>
		);
	}
}

export default reduxForm({
	form: 'bid'
})(BidForm);
