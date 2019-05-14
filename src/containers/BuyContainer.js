import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import PillToggle from '../components/PillToggle';
import BuyForm from '../forms/BuyForm';
import BidForm from '../forms/BidForm';
import { setPricing, clearPricing } from '../actions/userActions';

const StyledContainer = Styled.div`
    background: white;
    height: auto;
    padding: 20px;
`;

class BuyContainer extends Component {
	// need to sort item asks
	// mispelled asks --- change later
	render() {
		const { form, isSellActive, asks } = this.props;
		return (
			<StyledContainer>
				<PillToggle rightName="Buy Now" leftName="Bid Now" {...this.props} />

				{form === 'bid' || isSellActive ? <BidForm /> : <BuyForm asks={asks} />}
			</StyledContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		form: state.modals.modal.data.form,
		asks: Object.values(state.items[state.selectedItem].asks),
		isSellActive: state.pricing.isSellActive
	};
};

export default connect(mapStateToProps, { setPricing, clearPricing })(BuyContainer);
