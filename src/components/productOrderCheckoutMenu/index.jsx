import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { OrderCard } from '../orderCard/orderCard';
import { useProductOrder } from '../../hooks/useProductOrder';

const ProductOrderCheckoutMenu = () => {
	const { cart, setShowProductOrder, totalPriceInMyOrder } = useContext(CartContext);
	const [loading, setLoading] = useState(true);

	const { orderCheckout } = useProductOrder();

	const handleCheckoutOrder = () => {
		orderCheckout();
	};

	useEffect(() => {
		setLoading(true);
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 200);
		return () => clearTimeout(timeoutId);
	}, [cart]);

	const total = totalPriceInMyOrder(cart);

	// console.log(total);

	return (
		<aside className="w-48 md:w-60 lg:w-[360px] h-[calc(100vh-69px)] flex flex-col fixed bg-stone-100 top-16 right-0 mt-1 border border-black rounded-lg ">
			<div className="flex p-4 justify-between items-center">
				<h2 className="font-medium text-xl">My cart</h2>
				<FontAwesomeIcon className="cursor-pointer" icon={faTimes} onClick={() => setShowProductOrder(false)} />
			</div>
			{cart.length === 0 ? (
				<div className="flex flex-col p-4 overflow-y-auto">
					<p className="text-center">No item in cart</p>
				</div>
			) : (
				<div className="flex flex-col p-4 overflow-y-auto">
					{cart.map((order) => (
						<OrderCard key={order.id} order={order} loading={loading} />
					))}
					{loading ? (
						<>
							<div className="flex justify-between p-4 animate-pulse">
								<p className="text-lg font-medium h-5 w-20 bg-gray-300 rounded"></p>
								<span className="flex items-center justify-center text-sm font-medium">
									<div className="text-green-500 h-4 w-4 bg-gray-300 rounded"></div>
									<p className="text-lg font-medium ml-1 h-5 w-20 bg-gray-300 rounded"></p>
								</span>
							</div>
							<button className="bg-gray-300 text-transparent text-center py-2 rounded-lg animate-pulse"> </button>
						</>
					) : (
						<>
							<div className="flex justify-between p-4">
								<p className="text-lg font-medium">Total</p>
								<span className="flex items-center justify-center text-sm font-medium">
									<FontAwesomeIcon className="text-green-500" icon={faDollarSign} />
									<p className="text-lg font-medium ml-1">{total}</p>
								</span>
							</div>
							<button
								className="bg-violet-600 text-white text-center py-2 rounded-lg hover:bg-violet-700 transition duration-300"
								onClick={handleCheckoutOrder}>
								Checkout
							</button>
						</>
					)}
				</div>
			)}
		</aside>
	);
};

export { ProductOrderCheckoutMenu };
