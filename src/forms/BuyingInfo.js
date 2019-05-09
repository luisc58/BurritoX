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
class BuyingInfo extends React.Component {
	// In a real setting you won't save cc info in a db BUT FOR THIS I GUESS I'll do it
	state = {
		card_name: '',
		card_number: '',
		card_expMonth: '',
		card_expYear: '',
		card_CVV: ''
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
		this.props.updateAccountInfo(this.props.user.uid, 'buyingInfo', { ...this.state }).then(() => {
			this.props.showToast('success', 'Buying Info updated');
			this.props.close();
		});
	};
	render() {
		return (
			<StyledContainer>
				<h2>Buying Info</h2>
				<Form onSubmit={this.handleSubmit}>
					<fieldset>
						<label htmlFor="text">
							Name on card
							<input
								type="text"
								name="card_name"
								placeholder="John"
								value={this.state.card_name}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="password">
							Card Number
							<input
								type="number"
								name="card_number"
								placeholder="1111 - 2222 - 3333- 4444"
								value={this.state.card_number}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="password">
							Exp Month
							<input
								type="text"
								name="card_expMonth"
								placeholder="April"
								value={this.state.card_expMonth}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Exp Year
							<input
								type="number"
								name="card_expYear"
								placeholder="2019"
								value={this.state.card_expYear}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							CVV
							<input
								type="number"
								name="card_CVV"
								placeholder="352"
								value={this.state.card_CVV}
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
		user: state.users,
		initialValues: state.users.buyingInfo
	}),
	{ showToast, updateAccountInfo }
)(BuyingInfo);
