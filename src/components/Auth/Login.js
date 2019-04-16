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
	state = {
		username: '',
		password: ''
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	//==============================
	// testing hard-coded
	//===============================
	handleLogin = () => {
		if (this.state.username === 'ordinary') {
			this.props.setUser(ordinary);
			window.location.href = '/';
		} else if (this.state.username === 'super') {
			this.props.setUser(superUser);
			window.location.href = '/';
		}
	};

	render() {
		return (
			<FormContainer>
				<Form
					data-test="form"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<fieldset>
						<label htmlFor="text">
							<input
								type="text"
								id="useranme"
								name="username"
								placeHolder="Username"
								required
								value={this.state.username}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="password">
							<input
								type="password"
								id="password"
								name="password"
								placeHolder="Password"
								required
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</label>
						<button type="submit" onClick={this.handleLogin}>
							Login
						</button>
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
