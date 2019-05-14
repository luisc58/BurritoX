import React from 'react';
import { StyledItemImg, StyledItemName, StyledItemDetails, StyledItemButton } from '../styled/StyledItem';

function isUserSignedIn(user, method) {
	if (Object.keys(user).length === 0) window.location = '/login';
	else {
		method(...arguments);
	}
}

class ItemDetails extends React.Component {
	static defaultProps = {
		selectedItem: {
			name: '',
			poster: '',
			seller: '',
			rating: '',
			market: {
				highestBid: '',
				lowestAsk: ''
			},
			description: ''
		}
	};

	componentDidMount() {
		const itemId = this.props.match.params.id;
		this.props.selectItem(itemId);
	}

	render() {
		const { name, poster, seller, price, description } = this.props.selectedItem;

		return (
			<StyledItemDetails>
				<StyledItemName bigFont>{name}</StyledItemName>
				<ul className="a">
					<li>
						Seller: <span>{`${seller}`}</span>
					</li>
					<li>
						Price: <span>{`$${price}`}</span>
					</li>
				</ul>
				<StyledItemButton
					onClick={() =>
						isUserSignedIn(this.props.user, () =>
							this.props.showModal({ type: 'BUY_BID_ITEM', data: { form: 'buy' } })
						)}
				>
					Buy
				</StyledItemButton>
				<StyledItemButton
					isBlack
					onClick={() =>
						isUserSignedIn(this.props.user, () =>
							this.props.showModal({ type: 'BUY_BID_ITEM', data: { form: 'bid' } })
						)}
				>
					Bid
				</StyledItemButton>

				<StyledItemImg src={poster} alt={`${name}`} isExpanded />
				<p>{description}</p>
			</StyledItemDetails>
		);
	}
}

export default ItemDetails;
