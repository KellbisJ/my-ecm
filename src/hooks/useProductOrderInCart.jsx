import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useProductOrderInCart = () => {
	const { cart, setCart, count, setCount, totalPriceInMyOrder, addOrderToCart, order, setOrder, totalAllproductsInMyOrder } = useContext(CartContext);

	const orderCheckout = () => {
		const totalPrice = totalPriceInMyOrder(cart);
		const totalGeneralProductsOrdered = totalAllproductsInMyOrder(cart);
		const orderToAdd = {
			date: '10/01/25',
			products: cart,
			totalProducts: cart.length,
			totalAllProducts: totalGeneralProductsOrdered,
			totalPrice: totalPrice,
		};
		// setCart([]);
		// setCount(0);
		// setOrder([...order, orderToAdd]);
	};

	return { orderCheckout };
};

export { useProductOrderInCart };
