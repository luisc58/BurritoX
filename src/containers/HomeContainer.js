import React from 'react';
import { connect } from 'react-redux';
import { setSearchResults, setCategory } from '../actions/itemActions';
import { setSuperView } from '../actions/userActions';
import { showModal } from '../actions/modalActions';
import { getAllItems, getItem, deleteItem } from '../actions/firebaseItemActions';
import Home from '../components/Home';
import Super from '../components/Super';
import { GET_ITEMS } from '../constants/labels';

const mapStateToProps = (state) => {
	let searchResults = state.search.setSearchItems;
	let default_category = state.search.product_category;
	let userType = state.users.role;
	return {
		items: Object.values(state.items),
		searchResults,
		default_category,
		loading: state.isLoading[GET_ITEMS],
		userType,
		superView: state.users.currentView
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
				showModal={props.showModal}
				setView={props.setSuperView}
				superView={props.superView}
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
	setSuperView
})(HomeContainer);
