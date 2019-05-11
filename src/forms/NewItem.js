import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import Form from '../styled/Form';
import { StyledFormButton } from '../styled/Form';
import { createItem } from '../actions/firebaseItemActions';
import { showToast } from '../actions/toastActions';

const StyledContainer = Styled.div`
    background: white;
    padding: 2.5rem;
   h2 {
       font-size: 1.5rem;
   }
`;
class NewItem extends React.Component {
	state = {
		name: '',
		poster: '',
		description: '',
		category: '',
		verified: false
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createItem({ ...this.state }).then(() => {
			this.props.close();
			this.props.showToast('success', 'Item created');
		});
	};
	render() {
		return (
			<StyledContainer>
				<Form onSubmit={this.handleSubmit}>
					<h2>Create Item</h2>
					<fieldset>
						<label htmlFor="text">
							Name
							<input
								type="text"
								name="name"
								placeholder="Suprem swag"
								value={this.state.name}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Poster
							<input
								type="text"
								name="poster"
								placeholder="Poster's url"
								value={this.state.poster}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Description
							<input
								type="text"
								name="description"
								placeholder="Add a secription"
								value={this.state.description}
								required
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="text">
							Category
							<input
								type="text"
								name="category"
								placeholder="Category"
								value={this.state.category}
								required
								onChange={this.handleChange}
							/>
						</label>
						<StyledFormButton type="submit">Submit</StyledFormButton>
					</fieldset>
				</Form>
			</StyledContainer>
		);
	}
}

export default connect(
	(state) => ({
		user: state.users
	}),
	{ createItem, showToast }
)(NewItem);
