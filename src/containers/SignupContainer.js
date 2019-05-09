import React from 'react';
import { connect } from 'react-redux';
import Signup from '../components/Auth/Signup';
import { registerUser, setAuthInfo } from '../actions/firebaseActions';
import { showToast } from '../actions/toastActions';
const SignupContainer = (props) => {
	return <Signup registerUser={props.registerUser} setAuthInfo={setAuthInfo} showToast={props.showToast} />;
};

function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, { registerUser, setAuthInfo, showToast })(SignupContainer);
