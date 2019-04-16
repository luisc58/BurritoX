import React, { Component } from 'react';
import Styled from 'styled-components';

let StyledContainer = Styled.div`
    background: white;
    padding: 1rem;
`;

let StyledHeader = Styled.div`
     display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    background: black;
    color: white;
    font-size: 1.2rem;
    padding: 13px 10px;
`;

let StyledBody = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    font-size: 1.2rem;
	border-bottom: 1px solid rgba(215,215,215,0.8);
    padding: 10px;
`;

function asks(data) {
	return data.map((ask) => (
		<StyledBody key={ask.ask_id}>
			<div>{ask.ask_id}</div>
			<div>{ask.seller}</div>
			<div>{`$${ask.ask_value}`}</div>
		</StyledBody>
	));
}

function bids(data) {
	return data.map((bid) => (
		<StyledBody key={bid.bid_id}>
			<div>{bid.bid_id}</div>
			<div>{bid.bidder}</div>
			<div>{`$${bid.bid}`}</div>
		</StyledBody>
	));
}
function renderView(type, data) {
	let bids_header = [ 'Tracker #', 'Bidder', 'Bid' ];
	let asks_header = [ 'Tracker #', 'Seller', 'Price' ];
	return (
		<React.Fragment>
			<StyledHeader>
				{type === 'asks' ? asks_header.map((e) => <div>{e}</div>) : bids_header.map((e) => <div>{e}</div>)}
			</StyledHeader>
			{type === 'asks' ? asks(data) : bids(data)}
		</React.Fragment>
	);
}
class ItemAsks extends Component {
	state = {
		data: []
	};
	componentDidMount() {
		if (this.props.type === 'asks') this.props.getItemAsks(this.props.id);
		else if (this.props.type === 'bids') this.props.getItemBids(this.props.id);
	}

	componentDidUpdate(previousProps) {
		if (previousProps.data != this.props.data) {
			this.setState({ data: this.props.data.item_info });
		}
	}

	render() {
		let title = this.props.type === 'bids' ? 'Bids' : 'Asks';
		return (
			<StyledContainer>
				<h1>{title}</h1>
				{this.state.data.length > 0 ? (
					renderView(this.props.type, this.state.data)
				) : (
					`This item has no ${title}`
				)}
			</StyledContainer>
		);
	}
}

export default ItemAsks;
