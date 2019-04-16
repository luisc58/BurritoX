import React from 'react';
import { Styledsidebar } from '../../styled/StyledNav';

const Sidebar = ({ name, onChange }) => {
	return (
		<Styledsidebar>
			<h1>{name}</h1>
			<a href="/buying" onClick={() => onChange('BUYING')}>
				Buying
			</a>
			<a href="/selling" onClick={() => onChange('SELLING')}>
				Selling
			</a>
			<a href="/account" onClick={() => onChange('ACCOUNT')}>
				Profile
			</a>
			<a href="/settings" onClick={() => onChange('SETTINGS')}>
				Settings
			</a>
		</Styledsidebar>
	);
};

export default Sidebar;
