import React, { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { CustomNavLink } from './CustomNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { count, showProductOrder, setShowProductOrder } = useContext(CartContext);
	const { user, token } = useContext(AuthContext);
	const { setShowProductDetail } = useContext(ProductDetailContext);

	const navigate = useNavigate();

	const toggleMenu = () => {
		setShowProductDetail(false);
		setShowProductOrder(false);
		setOpen(!open);
	};

	const handleNavigate = (path) => {
		navigate(path);
	};

	const handleUserNavigate = () => {
		if (user && token) {
			navigate('/my-account');
		} else {
			navigate('/sign-in');
		}
	};

	return (
		<nav className="flex lg:justify-between items-center fixed z-10 top-0 w-full py-5 px-4 text-sm font-light bg-slate-800 text-gray-200">
			<div className="flex w-full items-center lg:hidden">
				<li className="flex flex-1 font-semibold text-lg list-none">
					<div className="lg:hidden cursor-pointer mr-4">
						<FontAwesomeIcon icon={!open ? faBars : faTimes} onClick={toggleMenu} />
					</div>
					<CustomNavLink to={'/'}>Shopi</CustomNavLink>
				</li>
				<li className="flex flex-2 mr-4">
					<FontAwesomeIcon icon={faUser} onClick={handleUserNavigate} />
				</li>
				<li className="flex flex-3 items-center">
					<FontAwesomeIcon
						icon={faShoppingCart}
						onClick={() => {
							handleNavigate('/checkout');
							setShowProductOrder(false);
						}}
					/>
					{count}
				</li>
			</div>

			{open && (
				<div className="fixed top-16 left-0 w-full h-screen bg-gray-200 z-20 py-5 px-8 flex justify-between text-base font-semibold lg:hidden text-black">
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
				<li className="text-gray-200">example@lala.com</li>
				<li>
					<CustomNavLink to={'/my-orders'}>My Orders</CustomNavLink>
				</li>
				<li>
					<FontAwesomeIcon icon={faUser} onClick={handleUserNavigate} />
				</li>
				<li>{user && token ? <CustomNavLink to={'/sign-out'}>SingOut</CustomNavLink> : <CustomNavLink to={'/sign-in'}>SingIn</CustomNavLink>}</li>
				<li
					className="cursor-pointer"
					onClick={() => {
						handleNavigate('/checkout');
						setShowProductOrder(false);
					}}>
					<FontAwesomeIcon icon={faShoppingCart} />
					{count}
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
