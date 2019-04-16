import React from 'react';
import { connect } from 'react-redux';
import { getItems, getAllItems, deleteItem, setSearchResults, setCategory } from '../actions/itemActions';
import { showModal } from '../actions/modalActions';
import Home from '../components/Home';
import Super from '../components/Super';
import { GET_ITEMS } from '../constants/labels';

const mapStateToProps = (state) => {
	let searchResults = state.search.setSearchItems;
	let default_category = state.search.product_category;
	let userType = state.users.type;
	return {
		items: Object.values(state.items),
		searchResults,
		default_category,
		loading: state.isLoading[GET_ITEMS],
		userType
	};
};

const HomeContainer = (props) => {
	if (props.userType === 'super') {
		return (
			<Super
				getItems={props.getAllItems}
				deleteItem={props.deleteItem}
				items={props.items}
				showModal={props.showModal}
			/>
		);
	}
	return <Home {...props} />;
};

export default connect(mapStateToProps, {
	getItems,
	deleteItem,
	getAllItems,
	setSearchResults,
	setCategory,
	showModal
})(HomeContainer);
