import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import GlobalStyle from '../styled/GlobalStyle';
import HomeContainer from '../containers/HomeContainer';
import SignupContainer from '../containers/SignupContainer';
import FriendsContainer from '../containers/FriendsContainer';
import LoginContainer from '../containers/LoginContainer';
import ItemDetailsContainer from '../containers/ItemDetailsContainer';
import StyledContainer from '../styled/StyledContainer';
import UserContainer from '../containers/UserContainer';
import SellContainer from '../containers/SellContainer';
import ModalContainer from '../containers/ModalContainer';
import Nav from '../utils/navType';
import { ToastContainer } from 'react-toastify';
// ================================================
// HIGHER ORDER COMPONENT AKA PARENT COMPONENT
//=================================================

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const App = (props) => {
	const { type } = props.users;
	return (
		<Fragment>
			<GlobalStyle />
			<Nav />
			<ToastContainer />
			<StyledContainer>
				<ModalContainer />
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/friends" component={FriendsContainer} />
				<Route exact path="/items/:id" component={ItemDetailsContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/signup" component={SignupContainer} />
				<Route exact path={window.location.pathname} component={UserContainer} />
				<Route exact path="/sell" component={SellContainer} />
			</StyledContainer>
		</Fragment>
	);
};

export default connect(mapStateToProps)(App);
