import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import users from './users';
import items from './items';
import selectedItem from './selectedItem';
import isLoading from './isLoading';
import search from './search';
import pricing from './pricing';
import modals from './modals';
const rootReducer = combineReducers({
	users,
	items,
	search,
	selectedItem,
	isLoading,
	modals,
	pricing,
	form: formReducer
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'search', 'modals' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;