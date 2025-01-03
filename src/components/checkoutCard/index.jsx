import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTimes, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CardCheckoutCartSkeleton } from '../Skeletons';
import { CartContext } from '../../context/CartContext';

const CheckoutCard = ({ product, loading }) => {
	const { cart, updateOrderFromCart, removeOrderFromCart } = useContext(CartContext);

	const handleUpdateProductOrder = (increment) => {
		updateOrderFromCart(product.id, increment);
	};

	const handleRemoveFromCart = () => {
		removeOrderFromCart(product.id);
	};

	const findInOrder = cart.find((cartOrder) => cartOrder.id === product.id);

	return (
		<>
			{loading ? (
				<CardCheckoutCartSkeleton />
			) : (
				<div className="flex justify-start items-center gap-4 bg-white rounded-lg shadow-md mb-4 relative w-full">
					<div className="w-20 md:w-32 h-24 md:h-32 p-3">
						<img src={product.image} alt={product.title} className="w-full h-full object-contain object-center" />
					</div>
					<div className="flex-1">
						<h2 className="text-sm md:text-lg font-bold w-9/12 sm:w-4/5 md:w-11/12 text-wrap break-all p-3">{product.title}</h2>
						<div className="flex items-center justify-between">
							<div className="flex items-center p-3">
								<button
									className="bg-gray-200 transition hover:bg-red-500 rounded-full w-7 sm:w-8 h-7 sm:h-8 text-gray-600 hover:text-white font-bold cursor-pointer"
									onClick={() => handleUpdateProductOrder(false)}>
									<FontAwesomeIcon icon={faMinus} />
								</button>
								<span className="mx-2 text-sm md:text-lg font-bold">{findInOrder?.quantity}</span>
								<button
									className="bg-gray-200 transition hover:bg-violet-500 rounded-full w-7 sm:w-8 h-7 sm:h-8 text-gray-600 hover:text-white font-bold cursor-pointer"
									onClick={() => handleUpdateProductOrder(true)}>
									<FontAwesomeIcon icon={faPlus} />
								</button>
							</div>
						</div>
					</div>
					<button className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition cursor-pointer" onClick={handleRemoveFromCart}>
						<FontAwesomeIcon icon={faTrash} size="lg" />
					</button>
				</div>
			)}
		</>
	);
};

export { CheckoutCard };
