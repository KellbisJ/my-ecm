import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { cart, showProductOrder, setShowProductOrder } = useContext(CartContext);
	const { user, token, userId } = useContext(AuthContext);
	const { setShowProductDetail } = useContext(ProductDetailContext);

	const navigate = useNavigate();

	const cartCount = cart.length;

	const toggleMenu = () => {
		setShowProductDetail(false);
		setShowProductOrder(false);
		setOpen(!open);
	};

	const handleNavigate = (path) => {
		navigate(path);
	};

	const handleUserNavigate = (e) => {
		e.preventDefault();
		if (user && token && userId) {
			navigate('/my-account');
		} else {
			navigate('/sign-in');
		}
	};

	// console.log(cartCount);

	return (
		<nav className="flex lg:justify-between items-center fixed z-10 top-0 w-full py-5 px-4 bg-slate-800 text-gray-200">
			<div className="flex w-full items-center lg:hidden">
				<li className="flex flex-1 font-semibold text-lg list-none">
					<div className="lg:hidden cursor-pointer mr-4">
						<FontAwesomeIcon icon={!open ? faBars : faTimes} onClick={toggleMenu} />
					</div>
					<Link to={'/'}>Shopi</Link>
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
					{cartCount}
				</li>
			</div>

			{open && (
				<div className="fixed top-16 left-0 w-full h-screen bg-gray-200 z-20 py-5 px-8 flex justify-between text-base font-semibold lg:hidden text-black">
					<ul className="mt-4 flex flex-col gap-3 text-wrap">
						<li>
							<Link to={'/home'}>All</Link>
						</li>
						<li>
							<Link to={'/home'}>Clothes</Link>
						</li>
						<li>
							<Link to={'/home'}>Electronics</Link>
						</li>
						<li>
							<Link to={'/home'}>Furnitures</Link>
						</li>
						<li>
							<Link to={'/home'}>Toys</Link>
						</li>
						<li>
							<Link to={'/home'}>Others</Link>
						</li>
					</ul>
					<ul className="mt-4 flex flex-col gap-3 text-wrap">
						<li>
							<Link to={'/my-orders'}>My Orders</Link>
						</li>
						<li>
							<Link to={'/my-account'}>My Account</Link>
						</li>
					</ul>
				</div>
			)}

			<ul className="hidden lg:flex items-center gap-3 sm:hidden">
				<li className="font-semibold text-lg">
					<Link to={'/'}>Shopi</Link>
				</li>
				<li>
					<Link to={'/home'}>All</Link>
				</li>
				<li>
					<Link to={'/home'}>Clothes</Link>
				</li>
				<li>
					<Link to={'/home'}>Electronics</Link>
				</li>
				<li>
					<Link to={'/home'}>Furnitures</Link>
				</li>
				<li>
					<Link to={'/home'}>Toys</Link>
				</li>
				<li>
					<Link to={'/home'}>Others</Link>
				</li>
			</ul>
			<ul className="hidden lg:flex items-center gap-3">
				<li>
					<Link to={'/my-orders'}>My Orders</Link>
				</li>
				<li>
					<FontAwesomeIcon className="cursor-pointer" icon={faUser} onClick={handleUserNavigate} />
				</li>
				<li>{user && token && userId ? <Link to={'/sign-out'}>SingOut</Link> : <Link to={'/sign-in'}>SingIn</Link>}</li>
				<li
					className="cursor-pointer"
					onClick={() => {
						handleNavigate('/checkout');
						setShowProductOrder(false);
					}}>
					<FontAwesomeIcon icon={faShoppingCart} />
					{cartCount}
				</li>
			</ul>
		</nav>
	);
};

export { NavBar };
