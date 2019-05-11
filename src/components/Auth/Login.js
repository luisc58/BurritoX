import React, { Component } from 'react';
import Form from '../../styled/Form';
import styled from 'styled-components';
const FormContainer = styled.div`margin: 0 20rem;`;

class Login extends Component {
	handleLogin = (event) => {
		event.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		this.props.loginUser({ email, password });
	};

	render() {
		return (
			<FormContainer>
				<Form data-test="form" onSubmit={this.handleLogin}>
					<fieldset>
						<label htmlFor="text">
							<input type="text" id="useranme" name="email" placeHolder="Email" required ref="email" />
						</label>
						<label htmlFor="password">
							<input
								type="password"
								id="password"
								name="password"
								placeHolder="Password"
								required
								ref="password"
							/>
						</label>
						<button type="submit">Login</button>
					</fieldset>
					<p>
						Don't have an account? <a>Sign up</a>
					</p>
				</Form>
			</FormContainer>
		);
	}
}

export default Login;
