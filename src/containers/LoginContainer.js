import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/userActions';
import { loginUser, fetchInfo } from '../actions/firebaseActions';
import { showToast } from '../actions/toastActions';
import Login from '../components/Auth/Login';

const mapStateToProps = (state) => {
	return {
		...state
	};
};
const LoginContainer = (props) => {
	return <Login {...props} />;
};

export default connect(mapStateToProps, { setUser, loginUser, fetchInfo, showToast })(LoginContainer);
