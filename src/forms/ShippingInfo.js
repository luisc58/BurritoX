import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import Form from '../styled/Form';
import { StyledFormButton } from '../styled/Form';
import { showToast } from '../actions/toastActions';
import { updateAccountInfo } from '../actions/firebaseActions';
const StyledContainer = Styled.div`
    background: white;
    padding: 2.5rem;
   h2 {
       font-size: 1.5rem;
   }
`;
class ShippingInfo extends React.Component {
	state = {
		name: '',
		country: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		number: ''
	};

	componentDidMount() {
		this.setState({ ...this.props.user.shippingInfo });
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.updateAccountInfo(this.props.user.uid, 'shippingInfo', { ...this.state }).then(() => {
			this.props.showToast('success', 'Shipping Info updated');
			this.props.close();
		});
	};
	render() {
		return (
			<StyledContainer>
				<h2>Shipping Info</h2>
				<Form onSubmit={this.handleSubmit}>
					<fieldset>
						<label htmlFor="text">
							Full name
							<input
								type="text"
								name="name"
								placeholder="Full Name"
								value={this.state.name}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Country
							<input
								type="text"
								name="country"
								placeholder="Country"
								value={this.state.country}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Address
							<input
								type="text"
								name="address"
								placeholder="Address"
								value={this.state.address}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							City
							<input
								type="text"
								name="city"
								placeholder="City"
								value={this.state.city}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							State
							<input
								type="text"
								name="state"
								placeholder="State"
								value={this.state.state}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Zip/Postal Code
							<input
								type="text"
								name="zip"
								placeholder="Zip/Postal Code"
								value={this.state.zip}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Phone number
							<input
								type="number"
								name="number"
								placeholder="Phone Number"
								value={this.state.number}
								required
								onChange={this.handleChange}
							/>
						</label>
						<StyledFormButton type="submit">Update Buying Info</StyledFormButton>
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
	{ showToast, updateAccountInfo }
)(ShippingInfo);
