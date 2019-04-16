import React from 'react';
import Styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { SimpleFormInput } from '../utils/formInputs';
import { StyledFormButton } from '../styled/Form';

const StyledContainer = Styled.div`
    background: white;
    padding: 2.5rem;
   h2 {
       font-size: 1.5rem;
   }
`;
class ProfileInfo extends React.Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<StyledContainer>
				<h2>Edit Profile</h2>
				<form onSubmit={handleSubmit}>
					<Field name="name" type="text" label="Name" component={SimpleFormInput} />
					<Field name="email" type="text" label="Email" component={SimpleFormInput} />
					<StyledFormButton type="submit">Submit</StyledFormButton>
				</form>
			</StyledContainer>
		);
	}
}

export default reduxForm({
	form: 'profile_info'
})(ProfileInfo);