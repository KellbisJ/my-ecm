import React from 'react';

const useProductOrder = () => {
	const createProductOrder = (product) => {
		const newProductOrder = {
			...product,
			quantity: 1,
			total: product.price,
		};
		return newProductOrder;
	};

	return { createProductOrder };
};

export { useProductOrder };
