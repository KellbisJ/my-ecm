import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/layout';

function MyOrder() {
	const { orders } = useContext(CartContext);
	if (orders.length > 0) {
		return <Layout>MyOrder</Layout>;
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
