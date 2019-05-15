import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTaboo } from '../actions/firebaseActions';
import Styled from 'styled-components';
import { StyledFormButton } from '../styled/Form';
import Form from '../styled/Form';

const StyledContainer = Styled.div`
	background-color: white;
	padding: 1rem;
`;
class TabooWord extends Component {
	state = {
		word: ''
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTaboo(this.state.word);
	};
	handleS;
	render() {
		return (
			<StyledContainer>
				<Form onSubmit={this.handleSubmit}>
					<fieldset>
						<label htmlFor="word">
							Add new word
							<input type="text" name="word" value={this.state.word} onChange={this.handleChange} />
						</label>
						<StyledFormButton>Submit</StyledFormButton>
					</fieldset>
				</Form>
			</StyledContainer>
		);
	}
}

export default connect((state) => ({}), { createTaboo })(TabooWord);
