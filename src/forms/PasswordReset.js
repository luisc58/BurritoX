import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import Form from '../styled/Form';
import { StyledFormButton } from '../styled/Form';
import { resetPassword } from '../actions/firebaseActions';
import { showToast } from '../actions/toastActions';

const StyledContainer = Styled.div`
    background: white;
    padding: 2.5rem;
   h2 {
       font-size: 1.5rem;
   }
`;
class PasswordReset extends React.Component {
	state = {
		password: ''
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let password = this.state.password;
		this.props.resetPassword(password).then((data) => {
			this.props.showToast('success', 'Password Updated');
			this.props.close();
		});
	};
	render() {
		return (
			<StyledContainer>
				<h2>Reset Password</h2>
				<Form onSubmit={this.handleSubmit}>
					<fieldset>
						<label htmlFor="password">
							New Password
							<input
								type="password"
								name="password"
								placeholder="Password"
								value={this.state.password}
								required
								onChange={this.handleChange}
							/>
						</label>
						<StyledFormButton type="submit">Submit</StyledFormButton>
					</fieldset>
				</Form>
			</StyledContainer>
		);
	}
}

export default connect(
	(state) => ({
		user: state.users
	}),
	{ resetPassword, showToast }
)(PasswordReset);
