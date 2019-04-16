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

// function displayView(form, isBidActive) {
// 	if(form === 'bid')
// }
class BuyContainer extends Component {
	render() {
		const { form, isSellActive } = this.props;
		return (
			<StyledContainer>
				<PillToggle rightName="Buy Now" leftName="Bid Now" {...this.props} />
				{form === 'bid' || isSellActive ? <BidForm /> : <BuyForm />}
			</StyledContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		form: state.modals.modal.data.form,
		isSellActive: state.pricing.isSellActive
	};
};

export default connect(mapStateToProps, { setPricing, clearPricing })(BuyContainer);
