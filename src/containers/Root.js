import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store, { persiststore } from '../store';
import App from '../components/App';
import theme from '../constants/theme';
import 'react-toastify/dist/ReactToastify.css';
import '../utils/nprogress.css';
// Redux-persist saves current user in local storage and persist state accross app

// CONTAINER IS CONNECTED TO REDUX STORE
const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persiststore} loading={null}>
				<ThemeProvider theme={theme}>
					<Router>
						<App />
					</Router>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
};

export default Root;
