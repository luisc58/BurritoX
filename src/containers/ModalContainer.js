import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../actions/modalActions';
import { postItem, updateItem, getItem, getItemAsks, getItemBids } from '../actions/itemActions';
import { updateProfileInfo } from '../actions/firebaseActions';
import ModalType from '../components/Modals/ModalType';
import {
	PROFILE,
	BUYING_INFO,
	SHIPPING_INFO,
	NEW_ITEM,
	UPDATE_ITEM,
	BUY_BID_ITEM,
	VIEW_ASKS,
	VIEW_BIDS,
	PASSWORD_RESET
} from '../constants/labels';
// MODALS
import ProfileInfo from '../forms/ProfileInfo';
import BuyingInfo from '../forms/BuyingInfo';
import ShippingInfo from '../forms/ShippingInfo';
import NewItem from '../forms/NewItem';
import EditItem from '../forms/EditItem';
import PasswordReset from '../forms/PasswordReset';
import ItemAsks from '../components/ItemAsks';
import Buyitem from '../components/BuyItem';
// container
import BuyContainer from '../containers/BuyContainer';

const ModalContainer = ({ modal, updateProfileInfo, hideModal, postItem, getItemAsks, getItemBids }) => {
	let handleSubmit = (values) => {
		postItem(values);
	};

	if (!modal.type) return null;
	switch (modal.type) {
		case PROFILE:
			return <ModalType modal={<ProfileInfo updateInfo={updateProfileInfo} />} onClose={hideModal} />;
		case PASSWORD_RESET:
			return <ModalType modal={<PasswordReset close={hideModal} />} onClose={hideModal} />;
		case BUYING_INFO:
			return <ModalType modal={<BuyingInfo close={hideModal} />} onClose={hideModal} />;
		case SHIPPING_INFO:
			return <ModalType modal={<ShippingInfo close={hideModal} />} onClose={hideModal} />;
		case NEW_ITEM:
			return <ModalType modal={<NewItem onSubmit={handleSubmit} close={hideModal} />} onClose={hideModal} />;
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
			return <ModalType modal={<EditItem close={hideModal} />} onClose={hideModal} />;
		case 'BUY_ITEM':
			return <ModalType modal={<Buyitem />} onClose={hideModal} />;
		default:
			return;
	}
};

const mapStateToProps = (state) => {
	return {
		modal: state.modals.modal
	};
};

export default connect(mapStateToProps, {
	hideModal,
	postItem,
	updateItem,
	getItem,
	getItemAsks,
	getItemBids,
	updateProfileInfo
})(ModalContainer);
