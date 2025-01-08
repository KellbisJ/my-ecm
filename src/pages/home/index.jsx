import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/layout';
import { Card } from '../../components/card';
import { getProducts } from '../../api/getProducts.js';
import { CardSkeleton } from '../../components/Skeletons/index.jsx';
import { ErrorPage } from '../../components/errorPage/index.jsx';

function Home() {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await getProducts();
				if (data) {
					setProducts(data);
				}
			} catch (err) {
				throw new Error('Failed to load home page. Please try again later.');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<Layout>
			{loading ? (
				<CardSkeleton />
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full max-w-screen-2xl justify-items-center mx-auto my-4 p-3.5">
					{products?.map((product) => (
						<Card key={product.id} product={product} />
					))}
				</div>
			)}
		</Layout>
	);
}

export { Home };
