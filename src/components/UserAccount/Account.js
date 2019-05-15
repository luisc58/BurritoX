import React, { Component } from 'react';
import Styled from 'styled-components';
import ReactStars from 'react-stars';
const StyledContainer = Styled.div`
	padding: 2rem;
	display: grid;
	grid-template-columns: 30% 70%;
`;

const StyledSellerLevel = Styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	border-right: 1px solid gray;
`;

class Account extends Component {
	render() {
		return (
			<StyledContainer>
				<StyledSellerLevel>
					<h1>Profile</h1>
					<h2>
						Seller Level: <span>Novice</span>
					</h2>
					<ReactStars count={5} size={44} color2={'#ffd700'} value={3.4} />
				</StyledSellerLevel>
			</StyledContainer>
		);
	}
}

export default Account;
