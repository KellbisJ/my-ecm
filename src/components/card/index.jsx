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
			productDetailData(product);
		}
	};

	const handleAddToCartClick = (e) => {
		if (product) {
			e.stopPropagation();
			setShowProductDetail(false);
			addToCart(product);
		}
	};

	return (
		<div
			className="flex flex-col bg-white cursor-pointer w-full max-w-52 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 "
			onClick={handleShowProductDetail}>
			<figure className="relative mb-2 w-full h-4/6 overflow-visible rounded-lg">
				<img src={`${product.image}`} alt="product" className="w-full h-full object-contain object-center" />
				<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">{`${product.category}`}</figcaption>
				<button
					className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-md"
					onClick={handleAddToCartClick}>
					<FontAwesomeIcon icon={faPlus} className="text-violet-600 text-center" />
				</button>
			</figure>
			<div className="flex-1 flex flex-col justify-center p-6 w-full bg-gray-200">
				<p className="text-sm md:text-base 2xl:text-lg font-medium overflow-hidden text-ellipsis whitespace-nowrap">{`${product.title}`}</p>
				<span className="flex items-center text-sm font-medium my-2">
					<FontAwesomeIcon className="text-green-500" icon={faDollarSign} />
					<p className="pl-1">{product.price}</p>
				</span>
			</div>
		</div>
	);
};

export { Card };
