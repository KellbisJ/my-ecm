import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { CheckoutCard } from '../../components/checkoutCard';
import { Layout } from '../../components/layout';
import { CartContext } from '../../context/CartContext';

function Checkout() {
	const { cart, totalAllproductsInMyOrder, totalPriceInMyOrder } = useContext(CartContext);

	const totalAllProducts = totalAllproductsInMyOrder(cart);
	const totalAllProductsPrice = totalPriceInMyOrder(cart);

	console.log('totalAllProducts:', totalAllProducts, 'totalAllProductsPrice:', totalAllProductsPrice);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 200);
		return () => clearTimeout(timeoutId);
	}, [cart]);

	return (
		<Layout>
			<div className="flex w-full justify-center gap-4 md:p-4">
				<div className="flex flex-col justify-start items-center p-4 gap-2 bg-gray-200 rounded my-0 min-w-72 min-h-36 max-h-36 md:min-h-80 md:max-h-80 overflow-y-auto w-9/12">
					{cart.map((productOrder) => (
						<CheckoutCard key={productOrder.id} product={productOrder} loading={loading} />
					))}
				</div>

				<div className="hidden md:flex flex-col justify-start gap-2 p-4 text-start bg-gray-200 rounded h-80 w-1/4">
					<h2 className="text-lg md:text-xl font-semibold">Continue Shopping</h2>
					<Link className="w-full">
						<button className="bg-violet-600 text-white text-center py-2 rounded-lg hover:bg-violet-700 transition duration-300 w-full">Buy</button>
					</Link>
					<div className="flex w-full justify-between">
						<p>{`${totalAllProducts} Product/s`}</p>
						<p>
							{`${totalAllProductsPrice}`}
							<FontAwesomeIcon className="text-green-500 pl-1" icon={faDollarSign} />
						</p>
					</div>

					<p>Total:</p>
					<h2 className="text-3xl font-semibold">
						{`${totalAllProductsPrice}`}
						<FontAwesomeIcon className="text-green-500 pl-1" icon={faDollarSign} />
					</h2>
				</div>

				<div className="flex md:hidden flex-col justify-center gap-2 text-start bg-gray-200 rounded fixed bottom-0 left-0 w-full min-h-40 max-h-40 overflow-y-auto">
					<div className="m-auto w-9/12">
						<h2 className="text-lg md:text-xl font-semibold">Continue Shopping</h2>

						<div className="flex justify-between text-wrap break-all">
							<p>{`${totalAllProducts} Product/s`}</p>
							<p>
								{`${totalAllProductsPrice}`}
								<FontAwesomeIcon className="text-green-500 pl-1" icon={faDollarSign} />
							</p>
						</div>

						<div className="flex justify-between w-full text-wrap break-all items-center">
							<p>Total:</p>
							<h2 className="text-3xl font-semibold">
								{`${totalAllProductsPrice}`}
								<FontAwesomeIcon className="text-green-500 pl-1" icon={faDollarSign} />
							</h2>
						</div>
						<Link className="w-full">
							<button className="bg-violet-600 text-white text-center py-2 rounded-lg hover:bg-violet-700 transition duration-300 w-full">Buy</button>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export { Checkout };
