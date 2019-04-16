import React from 'react';
import StyledItem, { StyledItemImg, StyledItemName, StyledItemPrice } from '../styled/StyledItem';

const Item = ({ poster, name, price }) => (
	<StyledItem>
		<StyledItemImg src={poster} alt={`${name}`} />
		<div className="body">
			<StyledItemName>{name}</StyledItemName>
			<span>Lowest ask</span>
			<StyledItemPrice>{`${!price ? 'Not available' : `$${price}`}`}</StyledItemPrice>
		</div>
	</StyledItem>
);

export default Item;
