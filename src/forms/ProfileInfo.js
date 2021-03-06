import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import Form from '../styled/Form';
import { StyledFormButton } from '../styled/Form';

const StyledContainer = Styled.div`
    background: white;
    padding: 2.5rem;
   h2 {
       font-size: 1.5rem;
   }
`;
class ProfileInfo extends React.Component {
	state = {
		name: '',
		email: ''
	};

	componentDidMount() {
		this.setState({ ...this.props.initialValues });
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let uid = this.props.user.uid;
		let name = this.state.name;
		let email = this.state.email;
		this.props.updateInfo(uid, name, email);
	};
	render() {
		return (
			<StyledContainer>
				<h2>Edit Profile</h2>
				<Form onSubmit={this.handleSubmit}>
					<fieldset>
						<label htmlFor="text">
							<input
								type="text"
								name="name"
								placeholder="Name"
								value={this.state.name}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="email">
							<input
								type="text"
								name="email"
								placeholder="Email"
								value={this.state.email}
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

export default connect((state) => ({
	initialValues: state.modals.modal.data,
	user: state.users
}))(ProfileInfo);
