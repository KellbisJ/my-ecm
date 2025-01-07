import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';
import { AuthContext } from '../../context/authContext';
import { SideNavBar } from './sideNavBar';
import { NavigatePathElement } from './navigatePathElement';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { cart, setShowProductOrder } = useContext(CartContext);
	const { user, token, userId } = useContext(AuthContext);
	const { setShowProductDetail } = useContext(ProductDetailContext);

	const navigate = useNavigate();

	const cartCount = cart.length;

	const toggleMenu = () => {
		setShowProductDetail(false);
		setShowProductOrder(false);
		setOpen(!open);
	};

	const handleUserNavigate = (e) => {
		e.preventDefault();
		if (user && token && userId) {
			navigate('/my-account');
		} else {
			navigate('/sign-in');
		}
	};

	return (
		<nav className="flex lg:justify-between items-center fixed z-10 top-0 w-full py-5 px-4 bg-slate-800 text-gray-200">
			{/* {mobile} */}
			<div className="flex w-full items-center lg:hidden">
				<li className="flex flex-1 font-semibold text-lg list-none">
					<div className="lg:hidden cursor-pointer mr-4">
						<FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
					</div>
					<NavigatePathElement path={'/'} sideBarOpen={setOpen}>
						Shopi
					</NavigatePathElement>
				</li>
				<li className="flex flex-2 mr-4">
					<FontAwesomeIcon icon={faUser} onClick={handleUserNavigate} />
				</li>
				<li className="flex flex-3 items-center">
					<NavigatePathElement path={'/checkout'} sideBarOpen={setOpen}>
						<FontAwesomeIcon icon={faShoppingCart} />
					</NavigatePathElement>

					{cartCount}
				</li>
			</div>

			{open && <SideNavBar setOpen={setOpen} />}

			{/* {desktop} */}
			<ul className="hidden lg:flex items-center gap-3 sm:hidden">
				<li className="font-semibold text-lg">
					<NavigatePathElement path={'/'}>Shopi</NavigatePathElement>
				</li>
				<li>
					<NavigatePathElement path={'/home'}>All</NavigatePathElement>
				</li>
				<li>
					<NavigatePathElement path={'/home'}>Clothes</NavigatePathElement>
				</li>
				<li>
					<NavigatePathElement path={'/home'}>Electronics</NavigatePathElement>
				</li>
				<li>
					<NavigatePathElement path={'/home'}>Furnitures</NavigatePathElement>
				</li>
				<li>
					<NavigatePathElement path={'/home'}>Toys</NavigatePathElement>
				</li>
				<li>
					<NavigatePathElement path={'/home'}>Others</NavigatePathElement>
				</li>
			</ul>
			<ul className="hidden lg:flex items-center text-center justify-center gap-3">
				<li>
					<NavigatePathElement path={'/my-orders'}>My Orders</NavigatePathElement>
				</li>
				<li>
					<FontAwesomeIcon className="cursor-pointer" icon={faUser} onClick={handleUserNavigate} />
				</li>
				<li className="cursor-pointer">
					<NavigatePathElement path={'/checkout'}>
						<FontAwesomeIcon icon={faShoppingCart} />
					</NavigatePathElement>

					{cartCount}
				</li>
				<li>
					{user && token && userId ? (
						<NavigatePathElement path={'/sign-out'}>SingOut</NavigatePathElement>
					) : (
						<NavigatePathElement path={'/sign-in'}>SingIn</NavigatePathElement>
					)}
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
