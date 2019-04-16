import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    margin: auto 3rem;
    max-width: ${(props) => props.theme.max_width};
`;

/////
const StyledItem = Styled.div`
	padding: 12px;
	display: flex;
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
	.edit { background: green; color: white; margin: 0 10px;}
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
	componentDidMount() {
		this.props.getItems();
	}
	render() {
		const { getItems, items, deleteItem, showModal } = this.props;
		return (
			<StyledContainer>
				<StyledToggle>
					<button>All Users</button>
					<button onClick={() => getItems()}>All Items</button>
					<button>Pending Users</button>
					<button>Taboo List</button>
				</StyledToggle>
				{displayItems(items, deleteItem, showModal)}
			</StyledContainer>
		);
	}
}

function displayItems(items, deleteItem, showModal) {
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
							<button
								className="edit"
								onClick={() =>
									showModal({
										type: 'UPDATE_ITEM',
										data: {
											item_id: item.id
										}
									})}
							>
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

export default index;
