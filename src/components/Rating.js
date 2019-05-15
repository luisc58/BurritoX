import React, { Component } from 'react';
import Styled from 'styled-components';
import ReactStars from 'react-stars';
import { StyledFormButton } from '../styled/Form';
const StyledContainer = Styled.div`
    background-color: white;
    padding: 1rem;
    .row { display: grid; grid-template-columns: 40% 60%; }
    h1 { text-align: start;}
`;
class Rating extends Component {
	state = {
		rating: 2
	};
	handleRating = (rating) => {
		this.setState({
			rating: rating
		});
	};

	handleOnClick = (e) => {
		this.props.setUserRating(this.state.rating, this.props.item_owner_id, this.props.grader_id);
	};
	render() {
		return (
			<StyledContainer>
				<h1>Rate user</h1>
				<div className="row">
					<ReactStars
						count={5}
						size={44}
						color2={'#ffd700'}
						value={this.state.rating}
						onChange={this.handleRating}
					/>
					<h1>{this.state.rating}</h1>
				</div>

				<StyledFormButton onClick={this.handleOnClick}>Submit</StyledFormButton>
			</StyledContainer>
		);
	}
}

export default Rating;
