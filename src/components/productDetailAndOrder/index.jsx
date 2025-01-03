import React, { useContext, useEffect } from 'react';
import { ProductDetail } from '../productDetail';
import { ProductOrderCheckoutMenu } from '../productOrderCheckoutMenu';
import { ProductDetailAndOrderContext } from '../../context/ProductDetailAndOrderContext';
import { useRouteValidator } from '../../hooks/useRouteValidator';
import { CartContext } from '../../context/CartContext';
import { ProductDetailContext } from '../../context/ProductDetailContext';

const ProductDetailAndOrder = () => {
	const { renderProductDetail, renderProductOrder } = useContext(ProductDetailAndOrderContext);
	const { setShowProductDetail } = useContext(ProductDetailContext);
	const { setShowProductOrder } = useContext(CartContext);
	const { validateToShowProductDetailAndOrder } = useRouteValidator();

	useEffect(() => {
		if (!validateToShowProductDetailAndOrder) {
			setShowProductOrder(false);
			setShowProductDetail(false);
		}
	}, [validateToShowProductDetailAndOrder, setShowProductOrder, setShowProductDetail]);

	return (
		<>
			{renderProductDetail && <ProductDetail />}
			{renderProductOrder && <ProductOrderCheckoutMenu />}
		</>
	);
};

export { ProductDetailAndOrder };
