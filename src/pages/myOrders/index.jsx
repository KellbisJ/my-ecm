import React, { useContext } from 'react';
import { Layout } from '../../components/layout';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar } from '@fortawesome/free-solid-svg-icons';

function MyOrders() {
	const { orders } = useContext(CartContext);
	const { userId } = useContext(AuthContext);

	const userOrders = orders.filter((order) => order.buyerId === userId);
	// console.log(userOrders);

	if (userOrders) {
		return (
			<Layout>
				<div className="flex flex-col w-[70vw] p-6 gap-6">
					{userOrders.map((order, index) => (
						<div className="flex justify-between items-center overflow-hidden bg-gray-200 p-6 rounded-lg" key={index}>
							<div className="p-4">
								<h2>{order.date}</h2>
							</div>

							<div className="flex justify-between w-full p-2">
								<div className="flex-1 flex overflow-hidden flex-wrap justify-center">
									{order.products.slice(0, 3).map((product, productIndex) => (
										<div key={productIndex} className="bg-white rounded-lg w-20 md:w-32 h-24 md:h-32 p-2 m-2">
											<img src={product.image} className="w-full h-full object-contain object-center" />
										</div>
									))}
									{order.products.length > 3 && (
										<div className="bg-gray-100 rounded-lg w-20 md:w-32 h-24 md:h-32 p-2 m-2 flex justify-center items-center">
											<p>+{order.products.length - 3} more</p>
										</div>
									)}
								</div>
							</div>

							<div className="flex items-center justify-between p-4">
								<p>{order.totalPrice}</p>
								<FontAwesomeIcon className="pl-1 color text-green-500" icon={faDollar} />
							</div>
						</div>
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
