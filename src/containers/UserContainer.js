import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { setUserPage } from '../actions/userActions';
import { showModal } from '../actions/modalActions';
import Sidebar from '../components/Navigation/Sidebar';
import Buying from '../components/UserAccount/Buying';
import Selling from '../components/UserAccount/Selling';
import Account from '../components/UserAccount/Account';
import Settings from '../components/UserAccount/Settings';

const StyledMain = Styled.div`
    display: grid;
	grid-template-columns: 15% 85%;
`;

const StyledSection = Styled.div`
	padding: 1.5rem;
`;

// we can make this reusable but for now it's ok --
const mapStateToProps = (state) => {
	return {
		...state
	};
};

const activeSection = () => {
	const links = [ '/buying', '/selling', '/account', '/settings' ];
	const path = window.location.pathname;
	if (links.includes(path)) return true;
	return false;
};

const isLink = (link) => {
	const path = window.location.pathname;
	return path === link;
};

class UserContainer extends React.Component {
	render() {
		const { users, setUserPage, showModal, hideModal } = this.props;

		const currentPage = (page) => {
			if (page === 'BUYING' || isLink('/buying')) return <Buying />;
			if (page === 'SELLING' || isLink('/selling')) return <Selling />;
			if (page === 'ACCOUNT' || isLink('/account')) return <Account />;
			if (page === 'SETTINGS' || isLink('/settings'))
				return <Settings showModal={showModal} hideModal={hideModal} />;
			return '';
		};

		return (
			<StyledMain>
				{activeSection() && <Sidebar name={users.name} onChange={setUserPage} />}
				{activeSection() && <StyledSection>{currentPage(users.currentPage)}</StyledSection>}
			</StyledMain>
		);
	}
}

export default connect(mapStateToProps, { setUserPage, showModal })(UserContainer);