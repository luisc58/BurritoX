import React, { Component } from 'react';
import Form from '../../styled/Form';
import styled from 'styled-components';

const FormContainer = styled.div`margin: 0 20rem;`;
class Signup extends Component {
	state = {
		email: '',
		name: '',
		password: ''
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
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
						<label htmlFor="name">
							<input
								type="text"
								id="name"
								name="name"
								placeHolder="Name"
								required
								value={this.state.firstName}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="email">
							<input
								type="text"
								id="email"
								name="email"
								placeHolder="Email address"
								required
								value={this.state.email}
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
