import React, { Component } from 'react';
import Form from '../../styled/Form';
import styled from 'styled-components';
const FormContainer = styled.div`margin: 0 20rem;`;

const ordinary = {
	type: 'ordinary',
	name: 'Luis Castillo'
};

const superUser = {
	type: 'super',
	name: 'Luis Castillo'
};
//======================
//======================
class Login extends Component {
	//==============================
	// testing hard-coded
	//===============================
	handleLogin = (event) => {
		event.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		this.props.loginUser({ email, password }).then((data) => {
			if (data.errorCode) {
				this.props.showToast('error', data.errorMessage);
			} else {
				const uid = data.user.uid;
				this.props.fetchInfo(uid);
			}
		});
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
