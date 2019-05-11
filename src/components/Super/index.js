import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    margin: auto 3rem;
    max-width: ${(props) => props.theme.max_width};
`;

const StyledItem = Styled.div`
	padding: 12px;
	display: flex;
	width: 100%;
	border-bottom: 1px solid rgba(215,215,215,0.8);
	img{
		height: 6rem;
		padding-right: 12px;
	}
	span { font-size: 1rem; font-weight: 600;}
	.info {
		button {
			color: blue;
			padding: 0;
		}
		button:not(:first-child) { padding: 10px;}

	}
	.delete {
		background: red;
		color: white;
	} 
	.edit { 
		background: #1fdfbc; color: white; margin: 0 10px;
			margin-left: 2rem;
		}
`;
const StyledItemContainer = Styled.div`
	padding: 1rem;
`;
const StyledToggle = Styled.div`
    padding: 2rem 0 0.5rem 0;
    border-bottom: solid 1px rgba(215,215,215);
	
    button {
        font-size: 1.1rem;
        font-weight: 600;
    }

`;

class index extends Component {
	render() {
		const { setView, superView, fetchUsers, userId } = this.props;

		let displayView = (view) => {
			if (view === 'users') return <Users {...this.props} />;
			if (view === 'items') return <Items {...this.props} />;
			if (view === 'pending_items') displayPendingItems();
		};
		return (
			<StyledContainer>
				<StyledToggle>
					<button onClick={() => setView('users')}>All Users</button>
					<button onClick={() => setView('items')}>All Items</button>
					<button onClick={() => setView('pending_items')}>Pending Items</button>
					<button>Taboo List</button>
				</StyledToggle>
				{displayView(superView)}
			</StyledContainer>
		);
	}
}

class Users extends Component {
	componentDidMount() {
		const { fetchUsers, userId } = this.props;
		fetchUsers(userId);
	}
	render() {
		function filterUsers(users) {
			return users.filter((user) => {
				return user.role != 'super';
			});
		}

		function displayButton(isApproved) {
			if (!isApproved) return <button className="edit">Approve User</button>;
		}
		let users = filterUsers(this.props.users);
		return (
			<StyledContainer>
				{users.map((user) => {
					return (
						<StyledItem key={user.id}>
							<h1>{user.email}</h1>
							{displayButton(user.verified)}
						</StyledItem>
					);
				})}
			</StyledContainer>
		);
	}
}

function displayPendingItems() {
	return <h1> Pending Items</h1>;
}

class Items extends Component {
	componentDidMount() {
		this.props.getItems();
	}
	render() {
		const { items, deleteItem, showModal, getItem } = this.props;
		return (
			<StyledItemContainer>
				{items.map((item) => {
					return (
						<StyledItem key={item.id}>
							<img src={item.poster} alt={item.name} />
							<div className="info">
								<span>{item.name}</span>
								<p>{item.description}</p>
								<span>{item.product_category}</span>
								<div className="actions">
									<button
										onClick={() =>
											showModal({
												type: 'VIEW_ASKS',
												data: {
													item_id: item.id
												}
											})}
									>
										View Asks
									</button>
									<button
										onClick={() =>
											showModal({
												type: 'VIEW_BIDS',
												data: {
													item_id: item.id
												}
											})}
									>
										View Bids
									</button>
								</div>
							</div>
							<div>
								<button className="edit" onClick={() => getItem(item.id, 'UPDATE_ITEM')}>
									Edit
								</button>
								<button className="delete" onClick={() => deleteItem(item.id)}>
									Delete
								</button>
							</div>
						</StyledItem>
					);
				})}
			</StyledItemContainer>
		);
	}
}

export default index;
