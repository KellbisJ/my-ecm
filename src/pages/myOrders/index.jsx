import React, { useContext, useState, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { CircleLoader } from '../../components/circleLoader';

function MyOrders() {
	const { orders } = useContext(CartContext);
	const { user, userId } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);
	const [userOrders, setUserOrders] = useState([]);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const filteredOrders = orders.filter((order) => order.buyerId === userId);
			setUserOrders(filteredOrders);
			setLoading(false);
		}, 200);

		return () => clearTimeout(timeoutId);
	}, [orders, userId]);

	if (loading) {
		return (
			<Layout>
				<CircleLoader />
			</Layout>
		);
	}

	if (userOrders.length > 0) {
		return (
			<Layout>
				<div className="grid grid-cols-1 gap-4 w-full sm:w-[75vw] md:w-[60vw] lg:w-[50vw] p-6">
					{userOrders.map((order, index) => (
						<Link to={`/my-order/${user}/${index}`} key={index}>
							<div className="bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-indigo-500 transition text-black hover:text-white">
								<div className="flex flex-col md:flex-row justify-between p-2">
									<div className="flex flex-col gap-1">
										<p>Purchase made on: {order.date}</p>
										<p>
											Total: {order.totalPrice}
											<FontAwesomeIcon className="pl-1 text-green-500" icon={faDollar} />
										</p>
									</div>
									<div className="flex gap-2 justify-center mt-2 md:mt-0">
										{order.products.slice(0, 3).map((product, productIndex) => (
											<img src={product.image} className="w-14 h-14 p-2 rounded bg-white object-contain object-center" key={productIndex} />
										))}
										{order.products.length > 3 && (
											<div className="bg-gray-100 rounded w-14 h-14 flex justify-center items-center text-black">
												<p>+{order.products.length - 3}</p>
											</div>
										)}
									</div>
								</div>
							</div>
						</Link>
					))}
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

export { MyOrders };
