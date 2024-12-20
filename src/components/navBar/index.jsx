import React, { useState, useContext } from 'react';
import { CustomNavLink } from './CustomNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { count } = useContext(CartContext);

	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-teal-300">
			<li className="font-semibold text-lg md:hidden list-none">
				<CustomNavLink to={'/'}>Shopi</CustomNavLink>
			</li>
			<div className="md:hidden">
				<FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
			</div>
			{open && (
				<div className="fixed top-0 left-0 w-full h-screen bg-stone-100 z-20 py-5 px-8">
					<div className="flex justify-between items-center">
						<div className="font-semibold text-lg ">
							<CustomNavLink to={'/'}>Shopi</CustomNavLink>
						</div>
						<FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
					</div>
					<ul className="mt-4">
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
						<li>
							<CustomNavLink to={'/account'}>Account</CustomNavLink>
						</li>
						<li>
							<FontAwesomeIcon icon={faShoppingCart} />
							{count}
						</li>
					</ul>
				</div>
			)}

			<ul className="hidden md:flex items-center gap-3 sm:hidden">
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
			<ul className="hidden md:flex items-center gap-3">
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
				<li>
					<FontAwesomeIcon icon={faShoppingCart} />
					{count}
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
