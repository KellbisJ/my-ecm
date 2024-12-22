import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Card = ({ product }) => {
	const { setShowProductOrder, addToCart } = useContext(CartContext);
	const { setShowProductDetail, productDetailData } = useContext(ProductDetailContext);

	const handleShowProductDetail = () => {
		if (product) {
			setShowProductOrder(false);
			setShowProductDetail(true);
			productDetailData(product);
		}
	};

	const handleAddToCartClick = (e) => {
		if (product) {
			e.stopPropagation();
			addToCart(product);
			setShowProductDetail(false);
			setShowProductOrder(true);
		}
	};

	return (
		<div
			className="bg-white cursor-pointer w-full max-w-xs h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
			onClick={handleShowProductDetail}>
			<figure className="relative mb-2 w-full h-4/6  overflow-hidden rounded-t-lg">
				<img src={`${product.image}`} alt="product" className="w-full h-full object-cover object-center" />
				<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">{`${product.category}`}</figcaption>
				<button
					className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-md"
					onClick={handleAddToCartClick}>
					<FontAwesomeIcon icon={faPlus} className="text-violet-600 text-center" />
				</button>
			</figure>
			<div className="px-2">
				<p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap">{`${product.title}`}</p>
				<span>
					<FontAwesomeIcon className="text-green-500" icon={faDollarSign} /> {product.price}
				</span>
			</div>
		</div>
	);
};

export { Card };
