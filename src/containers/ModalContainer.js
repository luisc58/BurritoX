import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modalActions';
import { postItem, updateItem, getItem, getItemAsks, getItemBids } from '../actions/itemActions';
import ModalType from '../components/Modals/ModalType';
import {
	PROFILE,
	BUYING_INFO,
	SHIPPING_INFO,
	NEW_ITEM,
	UPDATE_ITEM,
	BUY_BID_ITEM,
	VIEW_ASKS,
	VIEW_BIDS
} from '../constants/labels';
// MODALS
import ProfileInfo from '../forms/ProfileInfo';
import BuyingInfo from '../forms/BuyingInfo';
import ShippingInfo from '../forms/ShippingInfo';
import NewItem from '../forms/NewItem';
import ItemAsks from '../components/ItemAsks';
// container
import BuyContainer from '../containers/BuyContainer';

const ModalContainer = ({ modal, hideModal, postItem, updateItem, getItem, getItemAsks, getItemBids }) => {
	let handleSubmit = (values) => {
		postItem(values);
	};
	let handleUpdateSubmit = (values) => {
		updateItem(values, modal.data.item_id);
	};

	let itemInfo = () => {
		if (modal.data.item_info) return modal.data.item_info[0];
		return {};
	};

	if (!modal.type) return null;
	switch (modal.type) {
		case PROFILE:
			return <ModalType modal={<ProfileInfo />} onClose={hideModal} />;
		case BUYING_INFO:
			return <ModalType modal={<BuyingInfo />} onClose={hideModal} />;
		case SHIPPING_INFO:
			return <ModalType modal={<ShippingInfo />} onClose={hideModal} />;
		case NEW_ITEM:
			return <ModalType modal={<NewItem onSubmit={handleSubmit} />} onClose={hideModal} />;
		case BUY_BID_ITEM:
			return <ModalType modal={<BuyContainer onSubmit={handleSubmit} />} onClose={hideModal} />;
		case VIEW_ASKS:
			return (
				<ModalType
					modal={<ItemAsks type="asks" getItemAsks={getItemAsks} id={modal.data.item_id} data={modal.data} />}
					onClose={hideModal}
				/>
			);
		case VIEW_BIDS:
			return (
				<ModalType
					modal={<ItemAsks type="bids" getItemBids={getItemBids} id={modal.data.item_id} data={modal.data} />}
					onClose={hideModal}
				/>
			);
		case UPDATE_ITEM:
			return (
				<ModalType
					modal={
						<NewItem
							type="edit"
							onSubmit={handleUpdateSubmit}
							getItem={getItem}
							id={modal.data.item_id}
							// initialValues={{ name: 'test', poster: 'test_1' }}
						/>
					}
					onClose={hideModal}
				/>
			);
		default:
			return;
	}
};

const mapStateToProps = (state) => {
	return {
		modal: state.modals.modal
	};
};

export default connect(mapStateToProps, { hideModal, postItem, updateItem, getItem, getItemAsks, getItemBids })(
	ModalContainer
);
