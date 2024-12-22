import React, { createContext, useState, useEffect, useContext } from 'react';
import { ProductDetailContext } from './ProductDetailContext';
import { CartContext } from './CartContext';

const ProductDetailAndOrderContext = createContext();

const ProductDetailAndOrderProvider = ({ children }) => {
	const { showProductDetail } = useContext(ProductDetailContext);
	const { showProductOrder } = useContext(CartContext);

	const [renderProductDetail, setRenderProductDetail] = useState(false);
	const [renderProductOrder, setRenderProductOrder] = useState(false);

	useEffect(() => {
		if (showProductDetail) {
			setRenderProductDetail(true);
		} else {
			setRenderProductDetail(false);
		}
	}, [showProductDetail]);

	useEffect(() => {
		if (showProductOrder) {
			setRenderProductOrder(true);
		} else {
			setRenderProductOrder(false);
		}
	}, [showProductOrder]);

	return (
		<ProductDetailAndOrderContext.Provider value={{ renderProductDetail, renderProductOrder }}>{children}</ProductDetailAndOrderContext.Provider>
	);
};

export { ProductDetailAndOrderProvider, ProductDetailAndOrderContext };
