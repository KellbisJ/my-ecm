import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProductDetailContext } from '../context/ProductDetailContext';

const ProductDetail = () => {
	const { toggleProductDetail } = useContext(ProductDetailContext);
	return (
		<aside className="w-[360px] h-[calc(100vh-69px)] flex flex-col fixed bg-stone-100 top-16 right-0 mt-1 border border-black rounded-lg ">
			<div className="flex p-4 justify-between items-center">
				<h2 className="font-medium text-xl">Detail</h2>
				<FontAwesomeIcon className="cursor-pointer" icon={faTimes} onClick={toggleProductDetail} />
			</div>
		</aside>
	);
};

export { ProductDetail };
