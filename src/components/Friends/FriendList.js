import React, { Component } from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
`;
const StyledUser = Styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    border-bottom: 1px solid gray;
    padding: 10px;
    span { padding-bottom: 10px;}
    button { background: red; text-align: center; color: white;}
    .name { font-size: 1.1rem;}
    .info { display: grid;}
`;

class FriendList extends Component {
	render() {
		let Friends = Object.values(this.props.friends);
		return (
			<StyledContainer>
				<h1>My Friends</h1>
				{Friends.map((friend) => (
					<StyledUser key={friend.id}>
						<div className="info">
							<span className="name">{friend.username}</span>
							<span>{friend.email}</span>
						</div>
						<button>Remove</button>
					</StyledUser>
				))}
			</StyledContainer>
		);
	}
}

export default FriendList;
