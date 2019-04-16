import React, { Component } from 'react';
import Styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { SimpleFormInput, SimpleFormSelect, renderSelectField } from '../utils/formInputs';
import { StyledFormButton } from '../styled/Form';

const StyledContainer = Styled.div`
    background: white;
    padding: 2rem;
    h2 {
        font-size: 1.5rem;
    }
`;

class NewItem extends Component {
	componentDidMount() {
		if (this.props.type === 'edit') {
			this.props.getItem(this.props.id);
		}
		return;
	}
	render() {
		const { handleSubmit } = this.props;
		let options = [
			{ name: 'Supreme', value: 'supreme' },
			{ name: 'Sneakers', value: 'sneakers' },
			{ name: 'Books', value: 'books' },
			{ name: 'Electronics', value: 'electronics' }
		];

		return (
			<StyledContainer>
				<h2>{this.props.type === 'edit' ? 'Edit Item' : 'Create Item'}</h2>
				<form onSubmit={handleSubmit}>
					<Field name="name" type="text" label="Name" component={SimpleFormInput} />
					<Field name="poster" type="text" label="Poster" component={SimpleFormInput} />
					<Field name="description" type="text" label="Description" component={SimpleFormInput} />
					<Field name="category" label="Category" options={options} component={SimpleFormSelect} />
					<StyledFormButton type="submit">Submit</StyledFormButton>
				</form>
			</StyledContainer>
		);
	}
}

export default reduxForm({
	form: 'new_item'
})(NewItem);
