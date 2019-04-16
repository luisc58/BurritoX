import React, { Component } from 'react';
import Styled from 'styled-components';
import Item from './Item';
import { StyledItemLink } from '../styled/StyledItem';

const ItemsList = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    margin: 3rem auto;
    max-width: ${(props) => props.theme.maxWidth};
`;

class Items extends Component {
	static defaultProps = {
		items: [],
		default_category: 'all_items',
		loading: true
	};
	componentDidMount() {
		// dispatch this action but -- display items based on default_category
		this.props.getItems();
	}

	itemsToDisplay(item) {
		let itemJSX = (
			<StyledItemLink href={`/items/${item.id}`} key={item.id}>
				<Item key={item.id} name={item.name} poster={item.poster} price={item.market.lowestAsk} />
			</StyledItemLink>
		);
		// mispelled categoty in JSON // fix
		if (this.props.default_category === 'all_items') {
			return itemJSX;
		} else if (this.props.default_category === item.category) {
			return itemJSX;
		}
	}

	render() {
		return (
			<ItemsList>
				{this.props.loading ? <h1>Loading...</h1> : this.props.items.map((item) => this.itemsToDisplay(item))}
			</ItemsList>
		);
	}
}

export default Items;
