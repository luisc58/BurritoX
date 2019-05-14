import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    background-color: white;
    padding: 1rem;
`;
class Rating extends Component {
	render() {
		return (
			<StyledContainer>
				<h1>Rating</h1>
			</StyledContainer>
		);
	}
}

export default Rating;
