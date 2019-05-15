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
			selectedItem: {
				asks: {}
			},
			description: ''
		}
	};

	componentDidMount() {
		const itemId = this.props.match.params.id;
		this.props.selectItem(itemId);
	}

	render() {
		const { name, poster, asks, bids, price, description } = this.props.selectedItem;

		function getHighestBid() {
			if (bids != null) {
				return `$${Object.values(bids)[0].bid}`;
			}
			return 'No bids';
		}

		let highestBid = getHighestBid();
		return (
			<StyledItemDetails>
				<StyledItemName bigFont>{name}</StyledItemName>
				<ul className="a">
					<li>
						Price: <span>{`$${price}`}</span>
					</li>
					<li>
						Highest Bid: <span>{`${highestBid}`}</span>
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
