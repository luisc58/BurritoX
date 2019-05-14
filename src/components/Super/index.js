import React, { Component } from 'react';
import Styled from 'styled-components';
import { taboo } from '../../utils/helpers';
import { approveUser, fetchTaboo } from '../../actions/firebaseActions';
import { Bar } from 'react-chartjs-2';

const StyledContainer = Styled.div`
    margin: auto 3rem;
	max-width: ${(props) => props.theme.max_width};
	
	.add { background-color: green; margin-top: 1rem; margin-left: 12px; color: white; padding: 13px;}
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
		const { setView, superView, pendingItems, approveItem } = this.props;

		let displayView = (view) => {
			if (view === 'users') return <Users {...this.props} />;
			if (view === 'items') return <Items {...this.props} />;
			if (view === 'pending_items')
				return <PendingItems items={pendingItems} list={this.props.tabooList} approveItem={approveItem} />;
			if (view === 'transactions') return <Transactions />;
			if (view === 'taboo') return <Taboo list={this.props.tabooList} fetchTaboo={this.props.fetchTaboo} />;
		};
		return (
			<StyledContainer>
				<StyledToggle>
					<button onClick={() => setView('users')}>All Users</button>
					<button onClick={() => setView('items')}>All Items</button>
					<button onClick={() => setView('pending_items')}>Pending Items</button>
					<button onClick={() => setView('transactions')}>Transactions</button>
					<button onClick={() => setView('taboo')}>Taboo List</button>
				</StyledToggle>
				{displayView(superView)}
			</StyledContainer>
		);
	}
}

class Transactions extends Component {
	render() {
		const data = {
			labels: [ 'February', 'March', 'April', 'May' ],
			datasets: [
				{
					label: 'Number of sales',
					backgroundColor: 'rgba(31,223,188,0.5)',
					borderColor: 'rgba(31,223,188,0.8)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: [ 6, 59, 80, 81, 56 ]
				}
			]
		};

		return (
			<Bar
				data={data}
				width={100}
				height={400}
				options={{
					maintainAspectRatio: false
				}}
			/>
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

		function displayButton(isApproved, id, approve) {
			if (!isApproved)
				return (
					<button className="edit" onClick={() => approve(id)}>
						Approve User
					</button>
				);
		}
		let users = filterUsers(this.props.users);
		return (
			<StyledContainer>
				{users.map((user) => {
					return (
						<StyledItem key={user.id}>
							<h1>{user.email}</h1>
							{displayButton(user.verified, user.id, this.props.approveUser)}
						</StyledItem>
					);
				})}
			</StyledContainer>
		);
	}
}

class PendingItems extends Component {
	render() {
		const { items, approveItem } = this.props;

		return (
			<StyledItemContainer>
				{items.map((item) => {
					let name = item.name;
					let description = item.description;
					let words = taboo(name, description, this.props.list);
					return (
						<StyledItem key={item.id}>
							<img src={item.poster} alt={item.name} />
							<div className="info">
								<span>{words.newTitle}</span>
								<p>${item.price}</p>
								<p>{words.newDesc}</p>
								<span>{item.category}</span>
							</div>
							<div>
								<button className="edit" onClick={() => approveItem(item.id)}>
									Approve Item
								</button>
							</div>
							<div>
								<button className="delete">Send Warning</button>
							</div>
						</StyledItem>
					);
				})}
			</StyledItemContainer>
		);
	}
}

class Taboo extends Component {
	componentDidMount() {
		this.props.fetchTaboo();
	}
	render() {
		return (
			<StyledContainer>
				<button className="add">Add new word</button>
				{this.props.list.map((word) => {
					return (
						<StyledItem>
							<h1>{word}</h1>
						</StyledItem>
					);
				})}
			</StyledContainer>
		);
	}
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
								<p>${item.price}</p>
								<p>{item.description}</p>
								<span>{item.category}</span>
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
