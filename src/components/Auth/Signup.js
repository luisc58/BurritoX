import React, { Component } from 'react';
import Form from '../../styled/Form';
import styled from 'styled-components';

const FormContainer = styled.div`margin: 0 20rem;`;
class Signup extends Component {
	onFormSubmit = (event) => {
		event.preventDefault();

		const username = this.refs.name.value;
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		const role = 'ordinary';
		this.props.registerUser({ email, password }).then((data) => {
			if (data.errorCode) {
				this.props.showToast('error', data.errorMessage);
			} else {
				let uid = data.user.uid;
				let email = data.user.email;
				this.props.setAuthInfo({ uid, username, email, role });
			}
		});
	};
	render() {
		return (
			<FormContainer>
				<Form data-test="form" onSubmit={this.onFormSubmit}>
					<fieldset>
						<label htmlFor="name">
							<input type="text" id="name" name="name" placeHolder="Full Name" required ref="name" />
						</label>
						<label htmlFor="email">
							<input
								type="text"
								id="email"
								name="email"
								placeHolder="Email address"
								required
								ref="email"
							/>
						</label>
						<label htmlFor="password">
							<input
								type="password"
								id="password"
								name="password"
								placeHolder="Password"
								ref="password"
								required
							/>
						</label>
						<button type="submit">Sign up</button>
					</fieldset>
					<p>
						Already have an account? <a href="/login">Log in</a>
					</p>
				</Form>
			</FormContainer>
		);
	}
}

export default Signup;
