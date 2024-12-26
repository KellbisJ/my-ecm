import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CardOrderDetailSkeleton } from '../Skeletons';
import { CartContext } from '../../context/CartContext';

const OrderCard = ({ product, loading }) => {
	const { cart, updateProductOrder, removeFromCart } = useContext(CartContext);

	const handleUpdateProductOrder = (increment) => {
		updateProductOrder(product.id, increment);
	};

	const handleRemoveFromCart = () => {
		removeFromCart(product.id);
	};

	const findInProductOrder = cart.find((order) => order.id === product.id);

	return (
		<>
			{loading ? (
				<CardOrderDetailSkeleton />
			) : (
				<div className="bg-white rounded-lg shadow-md mb-4 p-4 max-w-sm relative">
					<button className="absolute top-0 left-0 text-gray-500 hover:text-gray-900 transition duration-300 px-2" onClick={handleRemoveFromCart}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<div className="flex justify-center mb-4">
						<img src={product.image} alt={product.title} className="w-24 h-24 object-contain object-center rounded-lg" />
					</div>
					<div className="text-center">
						<h2 className="text-sm md:text-base 2xl:text-lg font-medium mb-2">{findInProductOrder?.quantity}</h2>
						<div className="flex items-center justify-center mb-2">
							<button className="text-gray-500 hover:text-red-600 transition duration-300 mr-3" onClick={() => handleUpdateProductOrder(false)}>
								<FontAwesomeIcon icon={faMinus} />
							</button>
							<button className="text-gray-500 hover:text-violet-600 transition duration-300" onClick={() => handleUpdateProductOrder(true)}>
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</div>
						<span className="flex items-center justify-center text-sm font-medium">
							<FontAwesomeIcon className="text-green-500" icon={faDollarSign} />
							<p className="pl-1">{findInProductOrder?.total.toFixed(2)}</p>
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export { OrderCard };
