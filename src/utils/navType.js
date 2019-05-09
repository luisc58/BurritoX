import React from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { showModal } from '../actions/modalActions';
import GuestNav from '../components/Navigation/GuestNav';
import UserNav from '../components/Navigation/UserNav';
import SuperNav from '../components/Navigation/SuperNav';
import 'nprogress/nprogress.css';
//- get user type
const mapStateToProps = (state) => {
	return {
		type: state.users.role
	};
};

class Nav extends React.Component {
	componentWillMount() {
		NProgress.start();
	}
	componentDidMount() {
		setTimeout(function() {
			NProgress.done();
		}, 400);
	}
	render() {
		const { type, showModal } = this.props;
		const navType = (type) => {
			if (type === 'ordinary') {
				return <UserNav />;
			} else if (type === 'super') {
				return <SuperNav showModal={showModal} />;
			}
			return <GuestNav />;
		};
		return <div>{navType(type)}</div>;
	}
}

export default connect(mapStateToProps, { showModal })(Nav);
