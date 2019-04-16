import React from 'react';
import { connect } from 'react-redux';
import ItemDetails from '../components/ItemDetails';
import { selectItem } from '../actions/itemActions';
import { showModal } from '../actions/modalActions';

const ItemDetailsContainer = (props) => <ItemDetails {...props} />;

const mapStateToProps = (state) => ({
	selectedItem: state.items[state.selectedItem],
	user: state.users
});

export default connect(mapStateToProps, { selectItem, showModal })(ItemDetailsContainer);
