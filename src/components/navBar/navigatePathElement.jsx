import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductDetailContext } from '../../context/ProductDetailContext';
import { CartContext } from '../../context/CartContext';

const NavigatePathElement = ({ children, path, sideBarOpen = () => {} }) => {
	const { setShowProductOrder } = useContext(CartContext);
	const { setShowProductDetail } = useContext(ProductDetailContext);

	const handleNavigate = () => {
		setShowProductOrder(false);
		setShowProductDetail(false);
		sideBarOpen(false);
	};

	return (
		<Link onClick={handleNavigate} to={path}>
			{children}
		</Link>
	);
};

export { NavigatePathElement };
