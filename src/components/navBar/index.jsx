import React from 'react';
import { CustomNavLink } from './CustomNavLink';

const NavBar = () => {
	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-teal-300">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<CustomNavLink to={'/'}>Shopi</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/all'}>All</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/clothes'}>Clothes</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/electronics'}>Electronics</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/furnitures'}>Furnitures</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/toys'}>Toys</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/others'}>Others</CustomNavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">example@lala.com</li>
				<li>
					<CustomNavLink to={'/my-orders'}>My Orders</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/my-account'}>My Account</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to={'/sing-in'}>SingIn</CustomNavLink>
				</li>
				<li>🛒0</li>
			</ul>
		</nav>
	);
};

export { NavBar };
