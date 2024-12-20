import { createContext, useState } from 'react';

const ProductDetailContext = createContext();

const ProductDetailProvider = ({ children }) => {
	const [showProductDetail, setShowProductDetail] = useState(false);

	const toggleProductDetail = () => {
		setShowProductDetail(!showProductDetail);
	};

	return <ProductDetailContext.Provider value={{ showProductDetail, toggleProductDetail }}>{children}</ProductDetailContext.Provider>;
};

export { ProductDetailContext, ProductDetailProvider };
