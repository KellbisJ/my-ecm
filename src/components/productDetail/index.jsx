import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { ProductDetailContext } from '../context/ProductDetailContext';
import { CardDetailSkeleton } from '../Skeletons';

const ProductDetail = () => {
	const { toggleProductDetail, productData } = useContext(ProductDetailContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const timeoutId = setTimeout(() => {
			if (productData && Object.keys(productData).length > 0) {
				setLoading(false);
			}
		}, 200);
		return () => clearTimeout(timeoutId);
	}, [productData]);

	// console.log('Product detail:', productData);
	return (
		<aside className="w-48 md:w-60 lg:w-[360px] h-[calc(100vh-69px)] flex flex-col fixed bg-stone-100 top-16 right-0 mt-1 border border-black rounded-lg ">
			<div className="flex p-4 justify-between items-center">
				<h2 className="font-medium text-xl">Detail</h2>
				<FontAwesomeIcon className="cursor-pointer" icon={faTimes} onClick={toggleProductDetail} />
			</div>
			{loading ? (
				<CardDetailSkeleton />
			) : (
				<div className="flex flex-col p-4 overflow-auto">
					<p className="text-sm font-medium text-wrap mb-4">{`${productData.title}`}</p>
					<figure className="relative mb-2 w-full h-4/6 rounded-lg overflow-visible">
						<img src={`${productData.image}`} alt="product" className="w-full h-full object-cover object-center" />
						<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">{`${productData.category}`}</figcaption>
					</figure>
					<span>
						<FontAwesomeIcon className="text-green-500" icon={faDollarSign} /> {productData.price}
					</span>
					<p className=" mt-2">{productData.description}</p>
				</div>
			)}
		</aside>
	);
};

export { ProductDetail };
