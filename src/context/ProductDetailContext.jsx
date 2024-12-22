import React, { createContext, useState } from 'react';

const ProductDetailContext = createContext();

const ProductDetailProvider = ({ children }) => {
	const [showProductDetail, setShowProductDetail] = useState(false);
	const [productData, setProductData] = useState({});

	const productDetailData = (data) => {
		setProductData(data);
	};

	return (
		<ProductDetailContext.Provider value={{ showProductDetail, setShowProductDetail, productData, productDetailData }}>
			{children}
		</ProductDetailContext.Provider>
	);
};

export { ProductDetailContext, ProductDetailProvider };
