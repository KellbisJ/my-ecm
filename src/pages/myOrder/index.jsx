import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/layout';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { CircleLoader } from '../../components/circleLoader';

function MyOrder() {
	const { orders } = useContext(CartContext);
	const { userId } = useContext(AuthContext);
	const { userName, orderIndex } = useParams();
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const filteredOrder = orders.filter((order) => order.purchaseMadeBy === userName)[orderIndex];
			setOrder(filteredOrder);
			setLoading(false);
		}, 200);

		return () => clearTimeout(timeoutId);
	}, [orders, userName, orderIndex]);

	if (loading) {
		return (
			<Layout>
				<CircleLoader />
			</Layout>
		);
	}

	console.log(order);

	if (order) {
		return (
			<Layout>
				<div className="flex flex-col p-4 justify-center items-center w-full md:w-[60vw]">
					<div className="p-4 md:p-6 bg-indigo-100 border border-indigo-200 rounded-lg shadow-lg w-full">
						<h2 className="text-lg md:text-xl font-bold mb-2">Order Detail</h2>
						<p className="mb-1 md:mb-2">Purchase made by: {order.purchaseMadeBy}</p>
						<p className="mb-1 md:mb-2">Date: {order.date}</p>
						<p className="mb-1 md:mb-2">
							Total Price: {order.totalPrice} <FontAwesomeIcon className=" text-green-500" icon={faDollar} />
						</p>
						<div className="grid grid-cols-1 gap-2 md:gap-4 w-full">
							{order.products.map((product, index) => (
								<div key={index} className="bg-white p-2 md:p-4 border rounded-lg shadow-md flex flex-col md:flex-row items-center">
									<div className="flex-shrink-0">
										<img src={product.image} alt={product.title} className="w-16 h-16 md:w-20 md:h-20 object-contain object-center rounded" />
									</div>
									<div className="flex-grow p-2 md:p-4 bg-gray-200 rounded mt-2 md:mt-0 md:ml-4">
										<h3 className="font-bold">{product.title}</h3>
										<p className="text-xs md:text-sm text-gray-600 break-words">{product.description}</p>
										<p className="text-xs md:text-sm text-gray-600">Category: {product.category}</p>
										<div className="flex flex-col md:flex-row items-start md:items-center justify-between">
											<p className="font-bold mt-2">
												Price: {product.price} <FontAwesomeIcon className=" text-green-500" icon={faDollar} />
											</p>
											<p className="font-bold mt-2">
												Total: {product.total} <FontAwesomeIcon className=" text-green-500" icon={faDollar} />
											</p>
										</div>

										<p className="text-xs md:text-sm text-gray-600">Quantity: {product.quantity}</p>
										<p className="text-xs md:text-sm text-gray-600">
											Rating: {product.rating.rate} ({product.rating.count} reviews)
										</p>
									</div>
								</div>
							))}
						</div>
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

export { MyOrder };
