import React, { useContext } from 'react';
import { ProductDetail } from '../productDetail';
import { ProductOrderCheckoutMenu } from '../productOrderCheckoutMenu';
import { ProductDetailAndOrderContext } from '../../context/ProductDetailAndOrderContext';

const ProductDetailAndOrder = () => {
	const { renderProductDetail, renderProductOrder } = useContext(ProductDetailAndOrderContext);

	return (
		<>
			{renderProductDetail && <ProductDetail />}
			{renderProductOrder && <ProductOrderCheckoutMenu />}
		</>
	);
};

export { ProductDetailAndOrder };
