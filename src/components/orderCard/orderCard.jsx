import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { CardOrderDetailSkeleton } from '../Skeletons';
import { CartContext } from '../../context/CartContext';

const OrderCard = ({ order, loading }) => {
	const { cart, updateOrderFromCart, removeOrderFromCart } = useContext(CartContext);

	const handleUpdateProductOrder = (increment) => {
		updateOrderFromCart(order.id, increment);
	};

	const handleRemoveFromCart = () => {
		removeOrderFromCart(order.id);
	};

	const findInOrder = cart.find((cartOrder) => cartOrder.id === order.id);

	return (
		<>
			{loading ? (
				<CardOrderDetailSkeleton />
			) : (
				<div className="bg-white rounded-lg shadow-md mb-4 p-4 max-w-sm relative">
					<button className="absolute top-0 left-0 text-gray-500 hover:text-red-600 transition duration-300 px-2" onClick={handleRemoveFromCart}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					<div className="flex justify-center mb-4">
						<img src={order.image} alt={order.title} className="w-24 h-24 object-contain object-center rounded-lg" />
					</div>
					<div className="text-center">
						<h2 className="text-sm md:text-base 2xl:text-lg font-medium mb-2">{findInOrder?.quantity}</h2>
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
							<p className="pl-1">{findInOrder?.total}</p>
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export { OrderCard };
