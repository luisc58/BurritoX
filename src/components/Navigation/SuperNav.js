import React from 'react';
import StyledNav, { StyledLinks, StyledDropdown } from '../../styled/StyledNav';

const SuperNav = ({ showModal }) => {
	return (
		<StyledNav>
			<a href="/">
				Burrito<span>X</span>
			</a>
			<StyledLinks>
				<StyledDropdown>
					<span>Account</span>
					<div className="dropdown-content">
						<a href="/account">Account</a>
						<a href="/settings">Settings</a>
						<a onClick={() => localStorage.removeItem('persist:root')} href="/login">
							Sign Out
						</a>
					</div>
				</StyledDropdown>
				<button onClick={() => showModal({ type: 'NEW_ITEM' })}>
					<span>New Item</span>
				</button>
			</StyledLinks>
		</StyledNav>
	);
};

export default SuperNav;
