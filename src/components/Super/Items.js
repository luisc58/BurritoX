import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledItemContainer = Styled.div` padding: 1rem; `;
const StyledSmallImg = Styled.img` height: 6rem; padding-right: 12px;`;
const StyledSuperItem = Styled.div`
    padding: 12px;
    display: flex;
    border-bottom: 1px solid rgba(215, 215, 215, 0.8);
`;

const ItemInfo = (props) => {
	const { name, description, product_category } = props;
	return (
		<StyledItemInfo>
			<span>{name}</span>
			<p>{description}</p>
			<span>{product_category}</span>
		</StyledItemInfo>
	);
};

const ActionButton = (props) => {
	const { handleClick, label, className } = props;
	return (
		<button className={className} onClick={() => handleClick(...arguments)}>
			{label}
		</button>
	);
};

function modalData(type, data) {
	return { type, data: { ...data } };
}
const ItemActions = (props) => {
	const { showModal, itemId } = props;
	return (
		<div>
			<ActionButton label="View Asks" handleClick={showModal(modalData('VIEW_ASKS', { item_id: itemId }))} />
			<ActionButton label="View Bids" handleClick={showModal(modalData('VIEW_BIDS', { item_id: itemId }))} />
		</div>
	);
};

const ItemOptions = (props) => {
	const { showModal, deleteItem } = props;
	return (
		<div>
			<ActionButton
				className="edit"
				label="Edit"
				handleClick={showModal(modalData('UPDATE_ITEM', { item_id: itemId }))}
			/>
			<ActionButton className="delete" label="Delete" handleClick={deleteItem(itemId)} />
		</div>
	);
};

const Items = (props) => {
	const { items, showModal, deleteItem } = props;
	return (
		<StyledItemContainer>
			{items.map((item) => {
				<StyledSuperItem key={item.id}>
					<StyledSmallImg src={item.poster} alt={item.name} />
					<ItemInfo />
					<ItemActions showModal={showModal} itemId={item.id} />
					<ItemOptions showModal={showModal} deleteItem={deleteItem} temId={item.id} />
				</StyledSuperItem>;
			})}
		</StyledItemContainer>
	);
};

export default Items;
