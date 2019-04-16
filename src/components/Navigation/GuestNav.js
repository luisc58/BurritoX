import React from 'react';
import StyledNav, { StyledLinks } from '../../styled/StyledNav';

const GuestNav = () => {
	return (
		<StyledNav>
			<a href="/">
				Burrito<span>X</span>
			</a>
			<StyledLinks>
				<a href="/Login">
					<span>Login</span>
				</a>
				<a href="/Signup">Sign Up </a>
			</StyledLinks>
		</StyledNav>
	);
};

export default GuestNav;
