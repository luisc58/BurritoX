import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { SimpleFormInput, SimpleFormSelect, SimpleFormSelectTest } from '../utils/formInputs';
import { StyledFormButton } from '../styled/Form';

////////////////////////////////////////////////////////
class SellForm extends React.Component {
	render() {
		const { handleSubmit, options, highestBid, selectOption, selectedOption } = this.props;

		let handleChange = (value) => {
			console.log(value.value);
		};

		// let handleChange = (e) => {
		// 	selectOption(e.target.value);
		// };
		return (
			<form onSubmit={handleSubmit} className="form">
				<Field
					name="item"
					label="Item"
					selectedOption={selectedOption}
					selectOption={selectOption}
					handleChange={handleChange}
					options={options}
					component={SimpleFormSelectTest}
				/>
				<Field name="price" type="text" label="Price" bid={highestBid} component={SimpleFormInput} />
				<StyledFormButton type="submit">Submit</StyledFormButton>
			</form>
		);
	}
}

export default reduxForm({
	form: 'sell'
})(SellForm);
