import React from 'react';
import StyledNav, { StyledLinks, StyledDropdown } from '../../styled/StyledNav';

const UserNav = () => {
	return (
		<StyledNav>
			<a href="/">
				Burrito<span>X</span>
			</a>

			<StyledLinks>
				<StyledDropdown>
					<span>My Account</span>
					<div className="dropdown-content">
						<a href="/friends">Friends</a>
						<a href="/buying">Buying</a>
						<a href="/selling">Selling</a>
						<a href="/account">Account</a>
						<a href="/settings">Settings</a>
						<a onClick={() => localStorage.removeItem('persist:root')} href="/login">
							Sign Out
						</a>
					</div>
				</StyledDropdown>
				<a href="/sell">
					<span>Sell</span>
				</a>
			</StyledLinks>
		</StyledNav>
	);
};

export default UserNav;
