import React from 'react';
import Styled from 'styled-components';

const StyledTable = Styled.table`
	font-size: 1.1rem;
	width: 100%;
	th{ padding: 1.5rem 0.5rem 0.5rem 0.5rem;
		text-align: start;
		font-weight: 500;
		border-right: 1px solid rgba(215,215,215);
		border-bottom: 1px solid rgba(215,215,215);
	}
`;

class Buying extends React.Component {
	render() {
		return (
			<div>
				<h1>Buying</h1>
				<div>
					<StyledTable>
						<tr>
							<th>Item</th>
							<th>Price</th>
							<th>Highest Bid</th>
						</tr>
					</StyledTable>
				</div>
			</div>
		);
	}
}

export default Buying;
