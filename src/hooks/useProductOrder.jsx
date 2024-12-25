import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useProductOrder = (product) => {
	const { setProductOrder } = useContext(CartContext);

	const newProductOrder = {
		productName: product.title,
		productId: product.id,
		quantity: 1,
		price: product.price,
		total: product.price,
	};

	const updateProductOrder = (productId, increment) => {
		setProductOrder((prevOrder) => {
			return prevOrder.map((order) => {
				if (order.productId === productId) {
					const newQuantity = increment ? order.quantity + 1 : order.quantity - 1;
					const newTotal = newQuantity * order.price;
					if (newQuantity >= 1 && newQuantity <= 3) {
						return {
							...order,
							quantity: newQuantity,
							total: newTotal,
						};
					}
				}
				return order;
			});
		});
	};

	return { newProductOrder, updateProductOrder };
};

export { useProductOrder };
