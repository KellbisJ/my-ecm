import React, { useState, useContext } from 'react';
import { CustomNavLink } from './CustomNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { count } = useContext(CartContext);
	const { setShowProductDetail } = useContext(ProductDetailContext);

	const toggleMenu = () => {
		setShowProductDetail(false);
		setOpen(!open);
	};

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-teal-300">
			<li className="font-semibold text-lg lg:hidden list-none">
				<CustomNavLink to={'/'}>Shopi</CustomNavLink>
			</li>
			<div className="lg:hidden cursor-pointer">
				<FontAwesomeIcon icon={!open ? faBars : faTimes} onClick={toggleMenu} />
			</div>
			{open && (
				<div className="fixed top-16 left-0 w-full h-screen bg-stone-100 z-20 py-5 px-8 flex justify-between text-base font-semibold lg:hidden">
					<ul className="mt-4 flex flex-col gap-3 text-wrap">
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
					<ul className="mt-4 flex flex-col gap-3 text-wrap">
						<li>
							<CustomNavLink to={'/my-orders'}>My Orders</CustomNavLink>
						</li>
						<li>
							<CustomNavLink to={'/my-account'}>My Account</CustomNavLink>
						</li>
						<li>
							<CustomNavLink to={'/sing-in'}>SingIn</CustomNavLink>
						</li>
						<li className="flex justify-between items-center">
							<FontAwesomeIcon icon={faShoppingCart} />
							{count}
						</li>
					</ul>
				</div>
			)}

			<ul className="hidden lg:flex items-center gap-3 sm:hidden">
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
			<ul className="hidden lg:flex items-center gap-3">
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
