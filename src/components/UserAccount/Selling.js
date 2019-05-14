import React from 'react';
import Styled from 'styled-components';

const StyledTable = Styled.table`
	font-size: 1.1rem;
	width: 100%;
	th{ padding: 1.5rem 0.5rem 0.5rem 0.5rem;
		text-align: start;
		font-size: 1rem;
		font-weight: 500;
		border-right: 1px solid rgba(215,215,215);
		border-bottom: 1px solid rgba(215,215,215);
	}
	.header {
		font-weight: 600;
		font-size: 1.1rem;
		color: white;
		background-color: black;
	}
`;

function Item(data) {
	return (
		<tr key={data.id}>
			<th>{data.name}</th>
			<th>{data.price}</th>
			<th>{data.bid != null ? data.bid : 'No bids'}</th>
			<th>{data.verified == true ? '✅' : '❌'}</th>
		</tr>
	);
}
class Selling extends React.Component {
	render() {
		return (
			<div>
				<h1>Selling</h1>
				<div>
					<StyledTable>
						<tr>
							<th className="header">Item</th>
							<th className="header">Price</th>
							<th className="header">Highest Bid</th>
							<th className="header">Approved</th>
						</tr>
						{this.props.selling.map((data) => Item(this.props.items[data.item]))}
					</StyledTable>
				</div>
			</div>
		);
	}
}

export default Selling;
