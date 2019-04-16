import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { StyledFormButton } from '../styled/Form';
import { SimpleFormInput, SimpleFormSelect } from '../utils/formInputs';

////////////////////////////////////////////////////////

class AskForm extends React.Component {
	render() {
		const { handleSubmit, options, selectOption, selectedOption } = this.props;
		let handleChange = (e) => {
			selectOption(e.target.value);
		};
		return (
			<form onSubmit={handleSubmit} className="form">
				<Field
					name="item"
					label="Item"
					handleChange={handleChange}
					selectedOption={selectedOption}
					options={options}
					component={SimpleFormSelect}
				/>
				<Field name="ask" type="text" label="Ask" placeholder="ENTER ASK" component={SimpleFormInput} />
				<StyledFormButton type="submit">Submit</StyledFormButton>
			</form>
		);
	}
}

export default reduxForm({
	form: 'ask'
})(AskForm);
