import React from 'react';

const Card = ({ product }) => {
	return (
		<div className="bg-white cursor-pointer w-56 h-96 rounded-lg shadow-lg transition-transform transform hover:scale-105">
			<figure className="relative mb-2 w-full h-4/5 overflow-hidden rounded-t-lg">
				<img src={`${product.image}`} alt="product" className="w-full h-full object-cover object-center" />
				<figcaption className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">{`${product.category}`}</figcaption>
				<button className="absolute top-2 right-2 flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-md">
					<span className="text-lg text-green-500 text-center">+</span>
				</button>
			</figure>
			<div className="px-2">
				<p className="text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap">{`${product.title}`}</p>
				<p className="text-sm text-gray-600">{`$${product.price}`}</p>
			</div>
		</div>
	);
};

export { Card };
