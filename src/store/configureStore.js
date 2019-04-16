import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers';
import api from '../middleware/api';
import toastMiddleware from '../middleware/toasts';
// store configuration and any middleware goes here
const configureStore = (initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(api, toastMiddleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	const persiststore = persistStore(store);
	// hot reloading config
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer);
		});
	}

	return { store, persiststore };
};

export default configureStore;
