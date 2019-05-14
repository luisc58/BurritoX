import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { StyledFormButton } from '../styled/Form';
import { calculateTax } from '../utils/helpers';
import { showModal } from '../actions/modalActions';

let StyledContainer = Styled.div`
	background: white;
	display: grid;
	grid-template-columns: 60% 40%;
	padding: 1rem;
	.left { text-align: center;}
	.right { 
		margin: 5rem 0 1rem  0; 
		font-size: 1rem;
		
		ul { list-style-type: none; border-bottom: 1px solid gray; padding-bottom: 1rem; padding-left: 0;}
		li { padding-top: 1rem; text-align: start; font-weight: 600; margin: 0;}	
	}
	span { font-size: 1.3rem; font-weight: 600;}
	img { height: 18rem;}
`;
class BuyItem extends Component {
	// handleClick = () => {
	// 	this.props.showModal({})
	// }

	render() {
		const { data } = this.props;
		const region = 'New York';
		const tax = calculateTax(data.ask.price, region);
		const total = Number(data.ask.price) + Number(tax);
		return (
			<StyledContainer>
				<div className="left">
					<h2>{data.item.name}</h2>
					<img src={data.item.poster} alt="" />
				</div>
				<div className="right">
					<ul>
						<li>Price: ${data.ask.price}</li>
						<li>Tax+: ${tax}</li>
					</ul>
					<span>Total: ${total}</span>
					<StyledFormButton> Confirm</StyledFormButton>
				</div>
			</StyledContainer>
		);
	}
}

export default connect(
	(state) => ({
		data: state.modals.modal.data
	}),
	{ showModal }
)(BuyItem);
