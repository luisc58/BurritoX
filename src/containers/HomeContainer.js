import React from 'react';
import { connect } from 'react-redux';
import { setSearchResults, setCategory } from '../actions/itemActions';
import { setSuperView } from '../actions/userActions';
import { showModal } from '../actions/modalActions';
import { getAllItems, getItem, deleteItem, approveItem } from '../actions/firebaseItemActions';
import { fetchUsers, approveUser, fetchTaboo } from '../actions/firebaseActions';
import Home from '../components/Home';
import Super from '../components/Super';
import { GET_ITEMS } from '../constants/labels';

const mapStateToProps = (state) => {
	let searchResults = state.search.setSearchItems;
	let default_category = state.search.product_category;
	let userType = state.users.role;
	let id = state.users.uid;
	let a = Object.values(state.items);

	function filterItems(b) {
		return b.filter((item) => {
			return item.verified === true;
		});
	}

	function filterPendingItems(c) {
		return c.filter((item) => {
			return item.verified === false;
		});
	}

	let items = filterItems(a);
	let pendingItems = filterPendingItems(a);
	return {
		items,
		pendingItems,
		searchResults,
		default_category,
		loading: state.isLoading[GET_ITEMS],
		userType,
		id,
		superView: state.users.currentView,
		users: Object.values(state.superUser.users),
		tabooList: Object.values(state.superUser.tabooList)
	};
};

const HomeContainer = (props) => {
	if (props.userType === 'super') {
		return (
			<Super
				getItems={props.getAllItems}
				getItem={props.getItem}
				deleteItem={props.deleteItem}
				items={props.items}
				pendingItems={props.pendingItems}
				users={props.users}
				showModal={props.showModal}
				setView={props.setSuperView}
				superView={props.superView}
				fetchUsers={props.fetchUsers}
				fetchTaboo={props.fetchTaboo}
				userId={props.id}
				approveItem={props.approveItem}
				approveUser={props.approveUser}
				tabooList={props.tabooList}
			/>
		);
	}
	return <Home {...props} />;
};

export default connect(mapStateToProps, {
	deleteItem,
	getAllItems,
	setSearchResults,
	setCategory,
	showModal,
	getItem,
	setSuperView,
	fetchUsers,
	fetchTaboo,
	approveItem,
	approveUser
})(HomeContainer);
