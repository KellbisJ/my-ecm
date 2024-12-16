import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
	const activeStyle = 'underline underline-offset-4';
	return (
		<NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
			{children}
		</NavLink>
	);
};

export { CustomNavLink };
