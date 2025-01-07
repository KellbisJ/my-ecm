import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/layout';

function MyOrderSuccess() {
	const { tempOrder } = useContext(CartContext);

	if (tempOrder.length > 0) {
		const { products } = tempOrder[tempOrder.length - 1];
		return (
			<Layout>
				<div className="max-w-lg p-6">
					<h1 className="text-2xl font-semibold text-center my-8">You have purchased</h1>

					{/* < sm */}
					<div className="flex flex-col sm:hidden p-4 bg-indigo-100 border border-indigo-200 rounded-lg shadow-lg">
						{products.map((product, index) => (
							<div key={index} className="w-full bg-white shadow-md rounded flex-shrink-0 overflow-hidden mb-4">
								<img src={product.image} alt={product.title} className="w-full h-32 object-contain object-center p-2" />
								<div className="p-2">
									<p>You have purchased: {product.quantity}</p>
									<h2 className="text-lg font-semibold">{product.title}</h2>
									<p className="text-gray-600">Product Price: {product.price} $</p>
									<p className="text-gray-600">Total: {product.total} $</p>
								</div>
							</div>
						))}
					</div>

					{/* > md */}
					<div className="hidden md:flex overflow-x-auto space-x-4 p-4 bg-indigo-100 border border-indigo-200 rounded-lg shadow-lg">
						{products.map((product, index) => (
							<div key={index} className="w-48 bg-white shadow-md rounded flex-shrink-0 overflow-hidden">
								<img src={product.image} alt={product.title} className="w-full h-32 object-contain object-center p-2" />
								<div className="p-2">
									<p>You have purchased: {product.quantity}</p>
									<h2 className="text-lg font-semibold">{product.title}</h2>
									<p className="text-gray-600">Product Price: {product.price} $</p>
									<p className="text-gray-600">Total: {product.total} $</p>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-4">
						<Link to={'/my-orders'}>
							<button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 text-center transition w-60 rounded">View in your orders</button>
						</Link>
					</div>
				</div>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<div className="flex items-center w-full min-h-[90vh]">
					<div className="text-center h-4/6 m-auto">
						<h2 className="p-4">No items purchased</h2>
						<Link to={'/home'}>
							<button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 text-center transition w-60 rounded">Back to home</button>
						</Link>
					</div>
				</div>
			</Layout>
		);
	}
}

export { MyOrderSuccess };
