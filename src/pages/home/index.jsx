import React from 'react';

import { useState, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { Card } from '../../components/card';
import { getProducts } from '../../api/getProducts.js';
import { CardSkeleton } from '../../components/Skeletons/index.jsx';

function Home() {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const data = await getProducts();

			if (data) {
				setProducts(data);
			}
			setLoading(false);
		};

		fetchData();
	}, []);

	return (
		<Layout>
			{loading ? (
				<CardSkeleton />
			) : (
				<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg justify-items-center">
					{products?.map((product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			)}
		</Layout>
	);
}

export { Home };
