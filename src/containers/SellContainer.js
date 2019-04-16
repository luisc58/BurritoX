import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import SellForm from '../forms/SellForm';
import AskForm from '../forms/AskForm';
import PillToggle from '../components/PillToggle';
import { setPricing, clearPricing, selectOption } from '../actions/userActions';

const StyledContainer = Styled.div`
    background: rgba(215,215,215,0.2);
    height: 95vh;
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    grid-column-gap: 2rem;
`;
const StyledItem = Styled.div`
    background: white;
    height: 100%;
    padding: 3rem;
    text-align: center;
    h1 { font-size: 2rem;}
    img { object-fit: cover; width: 85%; padding-top: 3rem;}
`;

const StyledFormContainer = Styled.div`
    padding: 3rem ;
    height: auto;
    margin: 2rem;
    background: white;
`;
//////////

const mapStateToProps = (state) => {
	let items = Object.values(state.items);
	let selectedOption = state.pricing.selectedOption;
	let options = items.map((item) => ({
		name: item.name,
		value: item.id
	}));
	let item = state.items[selectedOption];
	return {
		options,
		item,
		selectedOption,
		isSellActive: state.pricing.isSellActive,
		highestBid: item.market.highestBid
	};
};

function SellNow(highestBid, form) {
	if (!highestBid) return <h1>No bids available :( </h1>;
	return form;
}

class SellContainer extends React.Component {
	static defaultProps = {
		item: {
			name: '',
			poster: ''
		}
	};
	render() {
		const { item, isSellActive, highestBid } = this.props;
		return (
			<StyledContainer>
				<StyledFormContainer>
					<PillToggle {...this.props} />
					{isSellActive ? SellNow(highestBid, <SellForm {...this.props} />) : <AskForm {...this.props} />}
				</StyledFormContainer>
				<StyledItem>
					<h1>{item.name}</h1>
					<img src={item.poster} alt={item.name} />
				</StyledItem>
			</StyledContainer>
		);
	}
}

export default connect(mapStateToProps, { setPricing, clearPricing, selectOption })(SellContainer);
