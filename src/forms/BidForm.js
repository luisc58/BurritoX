import React from 'react';
import { connect } from 'react-redux';
import Form from '../styled/Form';
import { StyledFormButton } from '../styled/Form';
import { showModal } from '../actions/modalActions';
import { bidOnItem } from '../actions/firebaseItemActions';
////////////////////////////////////////////////////////
class BidForm extends React.Component {
	state = {
		bid: ``
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleOnClick = (e) => {
		e.preventDefault();
		this.props.bidOnItem(this.state.bid, this.props.user_id, this.props.item_id);
		this.props.close();
	};
	render() {
		return (
			<Form className="form">
				<fieldset>
					<label htmlFor="text">
						Bid
						<input type="text" name="bid" value={this.state.bid} required onChange={this.handleChange} />
					</label>
					<StyledFormButton type="submit" onClick={this.handleOnClick}>
						Bid now
					</StyledFormButton>
				</fieldset>
			</Form>
		);
	}
}

export default connect(
	(state) => ({
		item: state.items[state.selectedItem],
		user_id: state.users.id,
		item_id: state.items[state.selectedItem].id
	}),
	{ showModal, bidOnItem }
)(BidForm);
