import React from 'react';
import { connect } from 'react-redux';
import Form from '../styled/Form';
import { StyledFormButton } from '../styled/Form';
import { showModal } from '../actions/modalActions';
////////////////////////////////////////////////////////
class BuyForm extends React.Component {
	state = {
		price: `$${this.props.asks[0].price}`
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleOnClick = () => {
		this.props.showModal({ type: 'BUY_ITEM', data: { ask: this.props.asks[0], item: this.props.item } });
	};
	render() {
		return (
			<Form className="form">
				<fieldset>
					<label htmlFor="text">
						Price
						<input
							type="text"
							name="price"
							value={this.state.price}
							required
							onChange={this.handleChange}
						/>
					</label>
					<StyledFormButton type="submit" onClick={this.handleOnClick}>
						Buy now
					</StyledFormButton>
				</fieldset>
			</Form>
		);
	}
}

export default connect(
	(state) => ({
		item: state.items[state.selectedItem]
	}),
	{ showModal }
)(BuyForm);
