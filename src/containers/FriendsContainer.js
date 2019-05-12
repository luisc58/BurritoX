import React, { Component } from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import Users from '../components/Friends/Users';
import FriendList from '../components/Friends/FriendList';
import { fetchUsers } from '../actions/firebaseActions';
const StyledContainer = Styled.div`
    background: white;
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    grid-gap: 3rem;
    height: auto;
    margin: 1rem 2rem;
    padding: 1rem;
`;

class FriendsContainer extends Component {
	componentDidMount() {
		const { fetchUsers, userId } = this.props;
		fetchUsers(userId);
	}
	render() {
		const { friends, users, userId } = this.props;
		return (
			<StyledContainer>
				<FriendList />
				<Users userId={userId} friends={friends} users={users} />
			</StyledContainer>
		);
	}
}

const mapStateToProps = (state) => {
	let friends = state.users.friends;
	let users = Object.values(state.superUser.users);
	let userId = state.users.id;
	return {
		friends,
		users,
		userId
	};
};
export default connect(mapStateToProps, { fetchUsers })(FriendsContainer);
