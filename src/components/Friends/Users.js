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
    button { background: #1fdfbc; text-align: center; color: white;}
    .name { font-size: 1.1rem;}
    .info { display: grid;}
`;

function filterUsers(users, friends) {
    console.log(friends);
	return users
		.filter((user) => {
			return user.role != 'super';
		})
		// .filter((user) => {
		// 	return !(user.id in friends);
		// });
}

class Users extends Component {
	render() {
		let Users = filterUsers(this.props.users, this.props.friends);
		return (
			<StyledContainer>
				<h1>Add Friends</h1>
				{Users.map((user) => (
					<StyledUser key={user.id}>
						<div className="info">
							<span className="name">{user.username}</span>
							<span>{user.email}</span>
						</div>
						<button>Add+</button>
					</StyledUser>
				))}
			</StyledContainer>
		);
	}
}

export default Users;
