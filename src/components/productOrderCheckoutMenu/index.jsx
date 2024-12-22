import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { OrderCard } from '../orderCard/orderCard';
import { CardDetailSkeleton } from '../Skeletons';

const ProductOrderCheckoutMenu = () => {
	const { cart, setShowProductOrder } = useContext(CartContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
		// const timeoutId = setTimeout(() => {
		// 	if (productData && Object.keys(productData).length > 0) {
		// 		setLoading(false);
		// 	}
		// }, 200);
		// return () => clearTimeout(timeoutId);
	}, [cart]);

	console.log(cart);

	// console.log('Product detail:', productData);
	return (
		<aside className="w-48 md:w-60 lg:w-[360px] h-[calc(100vh-69px)] flex flex-col fixed bg-stone-100 top-16 right-0 mt-1 border border-black rounded-lg ">
			<div className="flex p-4 justify-between items-center">
				<h2 className="font-medium text-xl">My order</h2>
				<FontAwesomeIcon className="cursor-pointer" icon={faTimes} onClick={() => setShowProductOrder(false)} />
			</div>
			{loading ? (
				<CardDetailSkeleton />
			) : (
				<div className="flex flex-col p-4 overflow-y-auto">
					{cart.map((product) => (
						<OrderCard key={product.id} title={product.title} imageUrl={product.image} price={product.price} />
					))}
				</div>
			)}
		</aside>
	);
};

export { ProductOrderCheckoutMenu };
