import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { CheckoutCard } from '../../components/checkoutCard';
import { Layout } from '../../components/layout';
import { CartContext } from '../../context/CartContext';

function Checkout() {
	const { cart } = useContext(CartContext);

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
			<div className="flex flex-col w-full justify-center items-center gap-2">
				{cart.map((productOrder) => (
					<CheckoutCard key={productOrder.id} product={productOrder} loading={loading} />
				))}
			</div>
		</Layout>
	);
}

export { Checkout };
