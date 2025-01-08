import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/authContext';

const useProductOrderInCart = () => {
	const {
		cart,
		setCart,
		tempOrder,
		setTempOrder,
		orders,
		setOrders,
		totalPriceInMyOrder,
		totalAllproductsInMyOrder,
		removeAllOrdersFromCart,
		saveUserPurchasedOrder,
	} = useContext(CartContext);
	const { user, token, userId } = useContext(AuthContext);

	const newOrderCheckout = async () => {
		if (user && token && userId) {
			const totalPrice = totalPriceInMyOrder(cart);
			const totalGeneralProductsOrdered = totalAllproductsInMyOrder(cart);
			const newOrder = {
				purchaseMadeBy: user,
				date: '10/01/25',
				products: cart,
				totalProducts: cart.length,
				totalAllProducts: totalGeneralProductsOrdered,
				totalPrice: totalPrice,
				buyerId: userId,
			};
			removeAllOrdersFromCart();
			setTempOrder((prevTempOrder) => [...prevTempOrder, newOrder]);
			saveUserPurchasedOrder(newOrder);
			// console.log('Nueva orden:', newOrder);
		}
	};
	return { newOrderCheckout };
};

export { useProductOrderInCart };
